import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="from">
                <h5>An Invitation from:</h5>
                <h2>Mrs. & Mr. Zafrulla</h2>

                {/* <h5 className="address mb-3">Retd. Teacher and Pesh Imam</h5> */}
                <h5 className="address mb-3">
                    Residence: Opposite LLC Guest House, 
                    <br /> Sudha Coss, Bellari,
                    <br /> Karnataka - 583 102.
                </h5>
                <p className="address">
                    Contact: <br />
                    +91 94837 86596, <br />
                    +91 96202 93996.
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
