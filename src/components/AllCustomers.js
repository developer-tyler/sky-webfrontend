import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { IconButton } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import './AllCustomers.css';
import { baseUrl } from '../config';

function AllCustomers() {
  const { isDarkMode } = useTheme();
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [customerNotes, setCustomerNotes] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    companyName: '',
    contactTitle: '',
    contactFirstNames: '',
    contactSurname: '',
    line1: '',
    line2: '',
    line3: '',
    line4: '',
    postcode: '',
    telephone: '',
    fax: '',
    email: ''
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [customerToDelete, setCustomerToDelete] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchCustomersAndNotes();
  }, []);

  useEffect(() => {
    if (customers.length > 0) {
      const filtered = customers.filter(customer => {
        const searchString = searchTerm.toLowerCase();
        return (
          customer.companyName?.toLowerCase().includes(searchString) ||
          customer.contactFirstNames?.toLowerCase().includes(searchString) ||
          customer.contactSurname?.toLowerCase().includes(searchString) ||
          customer.email?.toLowerCase().includes(searchString) ||
          customer.telephone?.includes(searchString) ||
          customer.line1?.toLowerCase().includes(searchString) ||
          customer.postcode?.toLowerCase().includes(searchString)
        );
      });
      setFilteredCustomers(filtered);
    }
  }, [searchTerm, customers]);

  const fetchCustomersAndNotes = async () => {
    try {
      const [customersResponse, notesResponse] = await Promise.all([
        fetch(`${baseUrl}/Customers`),
        fetch(`${baseUrl}/Notes`)
      ]);

      if (!customersResponse.ok || !notesResponse.ok) {
        throw new Error('Failed to fetch data');
      }

      const [customersData, notesData] = await Promise.all([
        customersResponse.json(),
        notesResponse.json()
      ]);

      // Create a map of customer IDs to their note counts
      const notesMap = notesData.reduce((acc, note) => {
        acc[note.custID] = (acc[note.custID] || 0) + 1;
        return acc;
      }, {});

      setCustomers(customersData);
      setCustomerNotes(notesMap);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSnackbarClose = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const showSuccess = (message) => {
    setSnackbar({
      open: true,
      message,
      severity: 'success'
    });
  };

  const showError = (message) => {
    setSnackbar({
      open: true,
      message,
      severity: 'error'
    });
  };

  const handleCreateCustomer = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseUrl}/Customers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to create customer');
      }

      const newCustomer = await response.json();
      setCustomers(prev => [...prev, newCustomer]);
      setShowForm(false);
      resetForm();
      showSuccess('Customer created successfully');
    } catch (err) {
      showError(err.message);
    }
  };

  const handleCustomerClick = (custId) => {
    navigate(`/customers/${custId}`);
  };

  const openDeleteDialog = (custId, e) => {
    e.stopPropagation(); // Prevent customer card click
    const customer = customers.find(c => c.custID === custId);
    setCustomerToDelete(customer);
    setDeleteDialogOpen(true);
  };

  const handleDeleteCustomer = async () => {
    try {
      const response = await fetch(`${baseUrl}/Customers/${customerToDelete.custID}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Failed to delete customer');
      }

      setCustomers(prev => prev.filter(c => c.custID !== customerToDelete.custID));
      showSuccess('Customer deleted successfully');
      setDeleteDialogOpen(false);
      setCustomerToDelete(null);
    } catch (err) {
      showError(err.message);
    }
  };

  const resetForm = () => {
    setFormData({
      companyName: '',
      contactTitle: '',
      contactFirstNames: '',
      contactSurname: '',
      line1: '',
      line2: '',
      line3: '',
      line4: '',
      postcode: '',
      telephone: '',
      fax: '',
      email: ''
    });
  };

  return (
    <div className={`customers-container ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="header-actions">
        <h1>All Customers</h1>
        <button onClick={() => setShowForm(!showForm)} className="add-customer-btn">
          {showForm ? 'Cancel' : 'Add New Customer'}
        </button>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search customers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {showForm && (
        <form onSubmit={handleCreateCustomer} className="customer-form">
          <div className="form-row">
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Company Name"
              required
            />
            <input
              type="text"
              name="contactTitle"
              value={formData.contactTitle}
              onChange={handleInputChange}
              placeholder="Contact Title"
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              name="contactFirstNames"
              value={formData.contactFirstNames}
              onChange={handleInputChange}
              placeholder="First Names"
            />
            <input
              type="text"
              name="contactSurname"
              value={formData.contactSurname}
              onChange={handleInputChange}
              placeholder="Surname"
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              name="line1"
              value={formData.line1}
              onChange={handleInputChange}
              placeholder="Address Line 1"
            />
            <input
              type="text"
              name="line2"
              value={formData.line2}
              onChange={handleInputChange}
              placeholder="Address Line 2"
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              name="line3"
              value={formData.line3}
              onChange={handleInputChange}
              placeholder="Address Line 3"
            />
            <input
              type="text"
              name="line4"
              value={formData.line4}
              onChange={handleInputChange}
              placeholder="Address Line 4"
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              name="postcode"
              value={formData.postcode}
              onChange={handleInputChange}
              placeholder="Postcode"
            />
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleInputChange}
              placeholder="Telephone"
            />
          </div>
          <div className="form-row">
            <input
              type="tel"
              name="fax"
              value={formData.fax}
              onChange={handleInputChange}
              placeholder="Fax"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
          </div>
          <button type="submit" className="submit-btn">Create Customer</button>
        </form>
      )}

      {loading && <p>Loading customers...</p>}
      {error && <p>Error: {error}</p>}
      {filteredCustomers.length > 0 ? (
        <div className="customers-grid">
          {filteredCustomers.map(customer => (
            <div 
              key={customer.custID} 
              className="customer-card"
              onClick={() => handleCustomerClick(customer.custID)}
            >
              <div className="card-actions">
                <IconButton 
                  onClick={(e) => openDeleteDialog(customer.custID, e)} 
                  size="small"
                  color="error"
                >
                  <DeleteIcon />
                </IconButton>
              </div>
              <h3>{customer.companyName}</h3>
              <p>Contact: {customer.contactTitle} {customer.contactFirstNames} {customer.contactSurname}</p>
              <p>Email: {customer.email}</p>
              <p>Phone: {customer.telephone}</p>
              <div className="address">
                <p>{customer.line1}</p>
                {customer.line2 && <p>{customer.line2}</p>}
                {customer.line3 && <p>{customer.line3}</p>}
                {customer.line4 && <p>{customer.line4}</p>}
                <p>{customer.postcode}</p>
              </div>
              {customerNotes[customer.custID] > 0 && (
                <div className="notes-count">
                  Notes: {customerNotes[customer.custID]}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="no-results">No customers found matching your search.</p>
      )}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <MuiAlert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          variant="filled"
        >
          {snackbar.message}
        </MuiAlert>
      </Snackbar>

      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
        <DialogTitle id="delete-dialog-title">
          Confirm Customer Deletion
        </DialogTitle>
        <DialogContent>
          <div id="delete-dialog-description">
            <p>Are you sure you want to delete this customer?</p>
            {customerToDelete && (
              <>
                <p><strong>Company:</strong> {customerToDelete.companyName}</p>
                <p><strong>Contact:</strong> {customerToDelete.contactTitle} {customerToDelete.contactFirstNames} {customerToDelete.contactSurname}</p>
              </>
            )}
            <p style={{ color: '#d32f2f', marginTop: '1rem' }}>
              This action cannot be undone. All associated notes and plant holdings will also be deleted.
            </p>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>
            Cancel
          </Button>
          <Button 
            onClick={handleDeleteCustomer}
            color="error"
            variant="contained"
          >
            Delete Customer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AllCustomers;