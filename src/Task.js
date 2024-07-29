// import moment from 'moment';
// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';


// export default function Task() {

//     const dispatch = useDispatch({});
//     const Navigate = useNavigate();

//     const [events, setEvents] = useState([]);
//     const [formData, setFormData] = useState({
//       eventName: '',
//       eventType: '',
//       eventStartDate: '',
//       eventEndDate: '',
//       eventDescription: '',
//       eventHandledBy: '',
//       eventOrganisation: '',
//       totalSubEvents: '',
//     });
  
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//         if (errors[name]) {
//           setErrors({ ...errors, [name]: '' });
//         }
//       };
  
//       const handleDateChange = (date, fieldName) => {
//         setFormData({ ...formData, [fieldName]: date });
//         if (errors[fieldName]) {
//           setErrors({ ...errors, [fieldName]: '' });
//         }
//       };
  
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (validate()) {
//             setEvents([...events, { ...formData, id: Date.now() }]);
//             const newEvent = { ...formData, id: Date.now() };
//             dispatch({ type: "ListData", payload: [newEvent] });
//             Navigate('/ShowList')

//           setFormData({
//             eventName: '',
//             eventType: '',
//             eventStartDate: '',
//             eventEndDate: '',
//             eventDescription: '',
//             eventHandledBy: '',
//             eventOrganisation: '',
//             totalSubEvents: '',
//           });
//           setErrors({});
//         }
//       };
  
  

//     const [errors, setErrors] = useState({});

//     const validate = () => {
//         let tempErrors = {};
//         if (!formData.eventName) tempErrors.eventName = "Please enter Event Name";
//         if (!formData.eventType) tempErrors.eventType = "Please enter Event Type";

//         if (!formData.eventStartDate) tempErrors.eventStartDate = "Please select Start Date";
//         if (!formData.eventEndDate) tempErrors.eventEndDate = "Please select End Date";
//         if (formData.eventEndDate < formData.eventStartDate) tempErrors.eventEndDate = "End Date cannot be before Start Date";
//         if (!formData.eventDescription) tempErrors.eventDescription = "Please enter Event Description";
//         if (!formData.eventHandledBy) tempErrors.eventHandledBy = "Please enter Event Handler";
//         if (!formData.eventOrganisation) tempErrors.eventOrganisation = "Please enter Event Organisation";
//         if (!formData.totalSubEvents || formData.totalSubEvents < 0) tempErrors.totalSubEvents = "Please enter a valid number of Sub-Events";
    
//         setErrors(tempErrors);
//         return Object.keys(tempErrors).length === 0;
//       };
     
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Event Name:</label>
//           <input
//             type="text"
//             name="eventName"
//             value={formData.eventName}
//             onChange={handleChange}
//             placeholder='Enter Event Name'
//           />
//            {errors.eventName && <span className="error">{errors.eventName}</span>}
//         </div>
//         <div>
//           <label>Event Type:</label>
//           <select
//             name="eventType"
//             value={formData.eventType}
//             onChange={handleChange}
//           >
//             <option value="">Select</option>
//             <option value="sports">Sports</option>
//             <option value="music">Music</option>
//             <option value="general">General</option>
//             <option value="children">Children</option>
//             <option value="school">School</option>
//           </select>
//           {errors.eventType && <span className="error">{errors.eventType}</span>}

//         </div>
//         <div className="date-picker-container">
//       <label htmlFor="eventStartDate">Event Start Date:</label>
//       <DatePicker
//         id="eventStartDate"
//         selected={formData.eventStartDate}
//         onChange={(date) => handleDateChange(date, 'eventStartDate')}
//         minDate={moment("01/01/1900").toDate()}
//         maxDate={formData.eventEndDate ? new Date(formData.eventEndDate) : new Date()}
//         placeholderText='DD/MM/YYYY'
//       />
//       {errors.eventStartDate && (
//         <span className="error-message">{errors.eventStartDate}</span>
//       )}
//     </div>
//         <div className="date-picker-container">
//           <label htmlFor="eventEndDate">Event End Date:</label>
//           <DatePicker
//           id="eventEndDate"
//             selected={formData.eventEndDate}
//             onChange={(date) => handleDateChange(date, 'eventEndDate')}
//             minDate={formData.eventStartDate ? new Date(formData.eventStartDate) : null}
//             maxDate={new Date()}
//             placeholderText='DD/MM/YYYY'
//           />
//              {errors.eventEndDate && (
//         <span className="error-message">{errors.eventEndDate}</span>
//       )}
//         </div>
//         <div>
//           <label>Event Description:</label>
//           <textarea
//             name="eventDescription"
//             value={formData.eventDescription}
//             onChange={handleChange}
//             placeholder='Enter Event Description'
//           />
//            {errors.eventDescription && <span className="error">{errors.eventDescription}</span>}
//         </div>
//         <div>
//           <label>Event Handled By:</label>
//           <input
//             type="text"
//             name="eventHandledBy"
//             value={formData.eventHandledBy}
//             onChange={handleChange}
//             placeholder='Enter Event Handled By'
//           />
//             {errors.eventHandledBy && <span className="error">{errors.eventHandledBy}</span>}
//         </div>
//         <div>
//           <label>Event Organisation:</label>
//           <input
//             type="text"
//             name="eventOrganisation"
//             value={formData.eventOrganisation}
//             onChange={handleChange}
//             placeholder='Enter Event Organisation'
//           />
//           {errors.eventOrganisation && <span className="error">{errors.eventOrganisation}</span>}
//         </div>
//         <div>
//           <label>Total Number of Sub-Events:</label>
//           <input
//             type="number"
//             name="totalSubEvents"
//             value={formData.totalSubEvents}
//             onChange={handleChange}
//             placeholder='Enter Total Number of Sub-Events'
//           />
//           {errors.totalSubEvents && <span className="error">{errors.totalSubEvents}</span>}
//         </div>
//         <button type="submit">Save Event</button>
//       </form>

     
//     </div>
//   )
// }


import moment from 'moment';
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Task() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [events, setEvents] = useState([]);
    const [formData, setFormData] = useState({
        eventName: '',
        eventType: '',
        eventStartDate: '',
        eventEndDate: '',
        eventDescription: '',
        eventHandledBy: '',
        eventOrganisation: '',
        totalSubEvents: '',
    });
    const [errors, setErrors] = useState({});
    const [editingEvent, setEditingEvent] = useState(null);

    useEffect(() => {
        if (location.state && location.state.event) {
            setFormData(location.state.event);
            setEditingEvent(location.state.event.id);
        }
    }, [location.state]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const handleDateChange = (date, fieldName) => {
        setFormData({ ...formData, [fieldName]: date });
        if (errors[fieldName]) {
            setErrors({ ...errors, [fieldName]: '' });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            const newEvent = { ...formData, id: editingEvent || Date.now() };
            if (editingEvent) {
                dispatch({ type: 'UpdateData', payload: newEvent });
            } else {
                dispatch({ type: 'ListData', payload: [newEvent] });
            }
            navigate('/ShowList');
            setFormData({
                eventName: '',
                eventType: '',
                eventStartDate: '',
                eventEndDate: '',
                eventDescription: '',
                eventHandledBy: '',
                eventOrganisation: '',
                totalSubEvents: '',
            });
            setErrors({});
            setEditingEvent(null);
        }
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.eventName) tempErrors.eventName = 'Please enter Event Name';
        if (!formData.eventType) tempErrors.eventType = 'Please enter Event Type';
        if (!formData.eventStartDate) tempErrors.eventStartDate = 'Please select Start Date';
        if (!formData.eventEndDate) tempErrors.eventEndDate = 'Please select End Date';
        if (formData.eventEndDate < formData.eventStartDate) tempErrors.eventEndDate = 'End Date cannot be before Start Date';
        if (!formData.eventDescription) tempErrors.eventDescription = 'Please enter Event Description';
        if (!formData.eventHandledBy) tempErrors.eventHandledBy = 'Please enter Event Handler';
        if (!formData.eventOrganisation) tempErrors.eventOrganisation = 'Please enter Event Organisation';
        if (!formData.totalSubEvents || formData.totalSubEvents < 0) tempErrors.totalSubEvents = 'Please enter a valid number of Sub-Events';
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Event Name:</label>
                    <input
                        type="text"
                        name="eventName"
                        value={formData.eventName}
                        onChange={handleChange}
                        placeholder="Enter Event Name"
                    />
                    {errors.eventName && <span className="error">{errors.eventName}</span>}
                </div>
                <div>
                    <label>Event Type:</label>
                    <select name="eventType" value={formData.eventType} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="sports">Sports</option>
                        <option value="music">Music</option>
                        <option value="general">General</option>
                        <option value="children">Children</option>
                        <option value="school">School</option>
                    </select>
                    {errors.eventType && <span className="error">{errors.eventType}</span>}
                </div>
                <div className="date-picker-container">
                    <label htmlFor="eventStartDate">Event Start Date:</label>
                    <DatePicker
                        id="eventStartDate"
                        selected={formData.eventStartDate}
                        onChange={(date) => handleDateChange(date, 'eventStartDate')}
                        minDate={moment('01/01/1900').toDate()}
                        maxDate={formData.eventEndDate ? new Date(formData.eventEndDate) : new Date()}
                        placeholderText="DD/MM/YYYY"
                    />
                    {errors.eventStartDate && (
                        <span className="error-message">{errors.eventStartDate}</span>
                    )}
                </div>
                <div className="date-picker-container">
                    <label htmlFor="eventEndDate">Event End Date:</label>
                    <DatePicker
                        id="eventEndDate"
                        selected={formData.eventEndDate}
                        onChange={(date) => handleDateChange(date, 'eventEndDate')}
                        minDate={formData.eventStartDate ? new Date(formData.eventStartDate) : null}
                        maxDate={new Date()}
                        placeholderText="DD/MM/YYYY"
                    />
                    {errors.eventEndDate && (
                        <span className="error-message">{errors.eventEndDate}</span>
                    )}
                </div>
                <div>
                    <label>Event Description:</label>
                    <textarea
                        name="eventDescription"
                        value={formData.eventDescription}
                        onChange={handleChange}
                        placeholder="Enter Event Description"
                    />
                    {errors.eventDescription && (
                        <span className="error">{errors.eventDescription}</span>
                    )}
                </div>
                <div>
                    <label>Event Handled By:</label>
                    <input
                        type="text"
                        name="eventHandledBy"
                        value={formData.eventHandledBy}
                        onChange={handleChange}
                        placeholder="Enter Event Handled By"
                    />
                    {errors.eventHandledBy && (
                        <span className="error">{errors.eventHandledBy}</span>
                    )}
                </div>
                <div>
                    <label>Event Organisation:</label>
                    <input
                        type="text"
                        name="eventOrganisation"
                        value={formData.eventOrganisation}
                        onChange={handleChange}
                        placeholder="Enter Event Organisation"
                    />
                    {errors.eventOrganisation && (
                        <span className="error">{errors.eventOrganisation}</span>
                    )}
                </div>
                <div>
                    <label>Total Number of Sub-Events:</label>
                    <input
                        type="number"
                        name="totalSubEvents"
                        value={formData.totalSubEvents}
                        onChange={handleChange}
                        placeholder="Enter Total Number of Sub-Events"
                    />
                    {errors.totalSubEvents && (
                        <span className="error">{errors.totalSubEvents}</span>
                    )}
                </div>
                <button type="submit">{editingEvent ? 'Update Event' : 'Save Event'}</button>
            </form>
        </div>
    );
}
