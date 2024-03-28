import React, { useState } from 'react';
import Navbarprof from './Navbarprof';
import { Link } from 'react-router-dom';

function Sentin({ Q }) {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [popoverContent, setPopoverContent] = useState('');
  const [selectedRow, setSelectedRow] = useState(null);
  const [newScore, setNewScore] = useState('');
  const [selectedRowIndex, setSelectedRowIndex] = useState(-1); // เพิ่ม state สำหรับการเลือกแถว

  const togglePopover = (content) => {
    setPopoverContent(content);
    setPopoverOpen(!popoverOpen);
  };

  const handleClick = (item, index) => { // รับ index เพิ่อใช้เก็บเพื่ออ้างอิงแถวที่เลือก
    setSelectedRow(item);
    setSelectedRowIndex(index); // เก็บ index ของแถวที่เลือก
    togglePopover(<strong>History</strong>);
  };

  const handleSubmit = () => {
    // Logic to submit new score
    console.log('New score submitted:', newScore);
    // Reset input field and popover content
    setNewScore('');
    setPopoverOpen(false);
  };

  const data = [
    { id: 6334412323, name: 'Kanok Rungrassameesab ', Q1: 9, Q2: 7 },
    { id: 6334421232, name: 'Pasit Pongpattana ', Q1: 8, Q2: 6 },
    { id: 6334421223, name: 'Surapong Jarassopon', Q1: 10, Q2: 9 },
  ];
  const handleScoreChange = (e, q) => {
    const { value } = e.target;
    switch (q) {
      case 'Q1':
        setNewScoreQ1(value);
        break;
      case 'Q2':
        setNewScoreQ2(value);
        break;
      // เพิ่ม case สำหรับ Q3, Q4, ..., Q10 ตามลำดับ
      default:
        break;
    }
  };
  

  return (
    <div>
      <Navbarprof />
      <br />
      <div className="media d-flex align-items-center">
        <img
          className="mr-3"
          src="https://cdn-icons-png.flaticon.com/512/3426/3426653.png"
          style={{ width: '40px', height: '40px' }}
        />
        &nbsp;&nbsp;&nbsp;
        <div className="card" style={{ width: '30rem', padding: '10px' }}>
          <h5>210xxx comp prog 2566/2 sec1</h5>
          <h6>Instructor: Name Surname</h6>
        </div>
      </div>
      <br />
      <div className="card text-left" style={{ marginLeft: '10em', marginRight: '10em' }}>
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <Link to="/AssignEdit">
                <button className="nav-link link">Edit</button>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Sent in
              </a>
            </li>
          </ul>
        </div>
        <br />
        <div className="card-body" style={{ overflowX: 'auto' }}>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="id or name" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
          <br />
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Q1</th>
                <th scope="col">Q2</th> {/* เพิ่มคอลัมน์สำหรับ Q2 */}
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                const splitData = item.name.split(', ');
                const name = splitData[0];

                return (
                  <tr
                    key={index}
                    onClick={() => handleClick(item, index)}
                    style={{ backgroundColor: item.Q2 !== '' ? '#ff0000' : '', cursor: 'pointer' }}
                  >
                    <th scope="row">{index + 1}</th>
                    <td>{item.id}</td>
                    <td>{name}</td>
                    <td>{item.Q1}</td>
                    <td>{item.Q2}</td> {/* แสดงคะแนน Q2 */}
                  </tr>
                );
              })}
            </tbody>
          </table>
          {popoverOpen && selectedRow && (
  <div className="popover" style={{ display: 'block', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
    <div className="popover-body">
      {popoverContent}
      {Object.keys(selectedRow).map((key, index) => {
        if (key.startsWith('Q')) {
          return (
            <div key={index}>
              <br />
              {key}
              <br />
              Last Submitted:
              <br />
              Score:
              <br />
              Last edited:
              <br />
              New Score:
              <input type="number" min="0" value={selectedRow[key]} onChange={(e) => handleScoreChange(key, e.target.value)} />
              <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          );
        }
        return null;
      })}
      <button type="button" className="btn-close" aria-label="Close" onClick={() => setPopoverOpen(false)} style={{ position: 'absolute', top: '0', right: '0' }}></button>
    </div>
  </div>
)}

          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <Link to="/AssignList">
              <button type="button" className="btn btn-primary">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sentin;
