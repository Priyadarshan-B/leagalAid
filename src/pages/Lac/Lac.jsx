import React from 'react';
import c1 from '../../assets/c1.jpg';
import c2 from '../../assets/c2.jpg';
import c3 from '../../assets/c3.jpg';
import c4 from '../../assets/c4.jpg';
import c5 from '../../assets/c5.jpg';
import c6 from '../../assets/c6.jpg';
import c7 from '../../assets/c7.jpg';
import c8 from '../../assets/c8.jpg';
import c9 from '../../assets/c9.jpg';

import m1 from '../../assets/m1.jpg';
import m2 from '../../assets/m2.jpg';
import m3 from '../../assets/m3.jpg';
import m4 from '../../assets/m4.jpg';
import m5 from '../../assets/m5.jpg';
import m6 from '../../assets/m6.jpg';
import ph1 from '../../assets/ph1.jpg';
import sm1 from '../../assets/sm1.jpg';
import './Lac.css'; 

function Lac() {
    return (
        <div className="lac-container">
            <h2>Core Committee Members</h2>
            <br />
            <div className="image-group core-committee">
            <div className="member-card">
                    <div className="circle">
                        <img src={c1} alt="Core Committee Member 1" />
                    </div>
                    <div className="member-info">
                        <strong>DHIRAJ</strong>
                        <p>CHIEF SECRETARY</p>
                    </div>
                </div>
                <div className="member-card">
                    <div className="circle">
                        <img src={c2} alt="Core Committee Member 2" />
                    </div>
                    <div className="member-info">
                        <strong>VIBHA</strong>
                        <p>SECRETARY</p>
                    </div>
                </div>
                <div className="member-card">
                    <div className="circle">
                        <img src={c3} alt="Core Committee Member 3" />
                    </div>
                    <div className="member-info">
                        <strong>SUSHMITHA</strong>
                        <p>SECRETARY</p>
                    </div>
                </div>
                <div className="member-card">
                    <div className="circle">
                        <img src={c4} alt="Core Committee Member 4" />
                    </div>
                    <div className="member-info">
                        <strong>SHARUKH</strong>
                        <p>SECRETARY</p>
                    </div>
                </div><div className="member-card">
                    <div className="circle">
                        <img src={c5} alt="Core Committee Member 3" />
                    </div>
                    <div className="member-info">
                        <strong>GNANAVEL</strong>
                        <p>SECRETARY</p>
                    </div>
                </div><div className="member-card">
                    <div className="circle">
                        <img src={c6} alt="Core Committee Member 3" />
                    </div>
                    <div className="member-info">
                        <strong>VIJAY KARAN</strong>
                        <p>SECRETARY</p>
                    </div>
                </div><div className="member-card">
                    <div className="circle">
                        <img src={c7} alt="Core Committee Member 3" />
                    </div>
                    <div className="member-info">
                        <strong>RASHA</strong>
                        <p>SECRETARY</p>
                    </div>
                </div><div className="member-card">
                    <div className="circle">
                        <img src={c8} alt="Core Committee Member 3" />
                    </div>
                    <div className="member-info">
                        <strong>FATMA</strong>
                        <p>SECRETARY</p>
                    </div>
                </div><div className="member-card">
                    <div className="circle">
                        <img src={c9} alt="Core Committee Member 3" />
                    </div>
                    <div className="member-info">
                        <strong>KSHITI</strong>
                        <p>SECRETARY</p>
                    </div>
                </div>
               
                
            </div>

            <h2>Members</h2>
            <br />
            <div className="image-group members">
                <div className="circle">
                    <img src={m1} alt="Member 1" />
                </div>
                <div className="circle">
                    <img src={m2} alt="Member 2" />
                </div>
                <div className="circle">
                    <img src={m3} alt="Member 3" />
                </div>
                <div className="circle">
                    <img src={m4} alt="Member 4" />
                </div>
                <div className="circle">
                    <img src={m5} alt="Member 5" />
                </div>
                <div className="circle">
                    <img src={m6} alt="Member 6" />
                </div>
            </div>

            <h2>Photographs</h2>
            <br />
            <div className="circle">
                <img src={ph1} alt="Photographs" />
            </div>
            <br />
            <h2>Social Media</h2>
            <br />
            <div className="circle">
                <img src={sm1} alt="Social Media" />
            </div>
        </div>
    );
}

export default Lac;
