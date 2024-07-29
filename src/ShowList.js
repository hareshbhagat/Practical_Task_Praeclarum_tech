// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';


// export default function ShowList() {

//     const ListData = useSelector(state => state.globalReducer.ListData);
//     const [events, setEvents] = useState([]);


//     const [sortConfig, setSortConfig] = useState({ key: 'eventName', direction: 'ascending' });
//     const [filter, setFilter] = useState('');

//     const handleSort = (key) => {
//       let direction = 'ascending';
//       if (sortConfig.key === key && sortConfig.direction === 'ascending') {
//         direction = 'descending';
//       }
//       setSortConfig({ key, direction });
//     };

//     const handleDelete = (id) => {
//         setEvents(events.filter(event => event.id !== id));
//       };
//     useEffect(()=> {
//         console.log("ListData" , ListData );
//         if(ListData){
//             setEvents(ListData)
//         }

//     },[ListData])


//     const sortedEvents = React.useMemo(() => {
//         let sortableEvents = [...events];
//         if (sortConfig !== null) {
//           sortableEvents.sort((a, b) => {
//             if (a[sortConfig.key] < b[sortConfig.key]) {
//               return sortConfig.direction === 'ascending' ? -1 : 1;
//             }
//             if (a[sortConfig.key] > b[sortConfig.key]) {
//               return sortConfig.direction === 'ascending' ? 1 : -1;
//             }
//             return 0;
//           });
//         }
//         return sortableEvents;
//       }, [events, sortConfig]);
    
//       const filteredEvents = sortedEvents.filter(event => {
//         return (
//           event.eventName.toLowerCase().includes(filter.toLowerCase()) ||
//           event.eventType.toLowerCase().includes(filter.toLowerCase()) ||
//           event.eventHandledBy.toLowerCase().includes(filter.toLowerCase()) ||
//           event.eventOrganisation.toLowerCase().includes(filter.toLowerCase())
//         );
//       });
//   return (
//     <>
//          <h2>Events</h2>
//       {/* <ul>
//         {events.map((event, index) => (
//           <li key={index}>
//             {event.eventName} ({event.eventType}) - {event.eventStartDate.toDateString()} to {event.eventEndDate.toDateString()}
//             <button onClick={() => handleDelete(index)}>Delete</button>
//           </li>
//         ))}
//       </ul> */}
//       <div>
//         <label>Filter:</label>
//         <input
//           type="text"
//           value={filter}
//           onChange={(e) => setFilter(e.target.value)}
//           placeholder="Filter events..."
//         />
//       </div>

//       <table className="events-table">
//         <thead>
//           <tr>
//             <th onClick={() => handleSort('eventName')}>
//               Event Name {(sortConfig.direction === 'ascending' ? '🔼' : '🔽')}
//             </th>
//             <th onClick={() => handleSort('eventType')}>
//               Event Type {(sortConfig.direction === 'ascending' ? '🔼' : '🔽')}
//             </th>
//             <th onClick={() => handleSort('eventStartDate')}>
//               Start Date {(sortConfig.direction === 'ascending' ? '🔼' : '🔽')}
//             </th>
//             <th onClick={() => handleSort('eventEndDate')}>
//               End Date { (sortConfig.direction === 'ascending' ? '🔼' : '🔽')}
//             </th>
//             <th onClick={() => handleSort('eventDescription')}>Description { (sortConfig.direction === 'ascending' ? '🔼' : '🔽')}</th>
//             <th onClick={() => handleSort('eventHandledBy')}>
//               Handled By { (sortConfig.direction === 'ascending' ? '🔼' : '🔽')}
//             </th>
//             <th onClick={() => handleSort('eventOrganisation')}>
//               Organisation { (sortConfig.direction === 'ascending' ? '🔼' : '🔽')}
//             </th>
//             <th onClick={() => handleSort('totalSubEvents')}>
//               Sub-Events {(sortConfig.direction === 'ascending' ? '🔼' : '🔽')}
//             </th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//   {filteredEvents && filteredEvents.length > 0 ? filteredEvents.map((event) => (
//     <tr key={event.id}>
//       <td>{event.eventName}</td>
//       <td>{event.eventType}</td>
//       <td>{event.eventStartDate.toDateString()}</td>
//       <td>{event.eventEndDate.toDateString()}</td>
//       <td>{event.eventDescription}</td>
//       <td>{event.eventHandledBy}</td>
//       <td>{event.eventOrganisation}</td>
//       <td>{event.totalSubEvents}</td>
//       <td>
//         <button onClick={() => handleDelete(event.id)}>Delete</button>
//       </td>
//     </tr>
//   )) :  <tr ><td colSpan={9} > <div><p className='text-center' style={{textAlign : 'center'}}>No Events Found</p></div></td></tr>}
// </tbody>

//       </table>
//     </>
//   )
// }


import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function ShowList() {
  const ListData = useSelector(state => state.globalReducer.ListData);
  const [events, setEvents] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: 'eventName', direction: 'ascending' });
  const [filter, setFilter] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    console.log("ListData", ListData);
    if (ListData) {
      setEvents(ListData);
    }
  }, [ListData]);

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const handleDelete = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const handleEdit = (event) => {
    navigate('/Task', { state: { event } });
  };

  const sortedEvents = React.useMemo(() => {
    let sortableEvents = [...events];
    if (sortConfig !== null) {
      sortableEvents.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableEvents;
  }, [events, sortConfig]);

  const filteredEvents = sortedEvents.filter(event => {
    return (
      event.eventName.toLowerCase().includes(filter.toLowerCase()) ||
      event.eventType.toLowerCase().includes(filter.toLowerCase()) ||
      event.eventHandledBy.toLowerCase().includes(filter.toLowerCase()) ||
      event.eventOrganisation.toLowerCase().includes(filter.toLowerCase())
    );
  });

  return (
    <>
      <h2>Events</h2>
    
      <div>
        <label>Filter:</label>
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter events..."
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Events</h2>
        <button className='add-button' onClick={() => navigate('/Task')} style={{ marginLeft: 'auto' }}>Add Event</button>
      </div>
      <table className="events-table">
        <thead>
          <tr>
            <th onClick={() => handleSort('eventName')}>
              Event Name {(sortConfig.direction === 'ascending' ? '🔼' : '🔽')}
            </th>
            <th onClick={() => handleSort('eventType')}>
              Event Type {(sortConfig.direction === 'ascending' ? '🔼' : '🔽')}
            </th>
            <th onClick={() => handleSort('eventStartDate')}>
              Start Date {(sortConfig.direction === 'ascending' ? '🔼' : '🔽')}
            </th>
            <th onClick={() => handleSort('eventEndDate')}>
              End Date {(sortConfig.direction === 'ascending' ? '🔼' : '🔽')}
            </th>
            <th onClick={() => handleSort('eventDescription')}>Description {(sortConfig.direction === 'ascending' ? '🔼' : '🔽')}</th>
            <th onClick={() => handleSort('eventHandledBy')}>
              Handled By {(sortConfig.direction === 'ascending' ? '🔼' : '🔽')}
            </th>
            <th onClick={() => handleSort('eventOrganisation')}>
              Organisation {(sortConfig.direction === 'ascending' ? '🔼' : '🔽')}
            </th>
            <th onClick={() => handleSort('totalSubEvents')}>
              Sub-Events {(sortConfig.direction === 'ascending' ? '🔼' : '🔽')}
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEvents && filteredEvents.length > 0 ? filteredEvents.map((event) => (
            <tr key={event.id}>
              <td>{event.eventName}</td>
              <td>{event.eventType}</td>
              <td>{event.eventStartDate.toDateString()}</td>
              <td>{event.eventEndDate.toDateString()}</td>
              <td>{event.eventDescription}</td>
              <td>{event.eventHandledBy}</td>
              <td>{event.eventOrganisation}</td>
              <td>{event.totalSubEvents}</td>
              <td>
                <button onClick={() => handleEdit(event)} style={{ marginRight: '10px' }}>Update</button>
                <button onClick={() => handleDelete(event.id)}>Delete</button>
              </td>
            </tr>
          )) : <tr><td colSpan={9}><div><p className='text-center' style={{ textAlign: 'center' }}>No Events Found</p></div></td></tr>}
        </tbody>
      </table>
    </>
  );
}
