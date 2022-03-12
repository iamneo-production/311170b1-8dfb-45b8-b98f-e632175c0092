const DisplayUser = () => {
  return (
    <div className="display_users_wrapper">
      <div className="count_of_applications">
        <p id="count_number"><strong>2</strong> applicant(s) to verify</p>
      </div>
      <div className="applicants_list">
        <div className="applicant_deets">
          <p id="applicant_name">
            Varshith Thota
          </p>
          <p>
            Applicant email: varshiththota@bikeloan.com
          </p>
          <p>
            Loan amount: 10,000,000
          </p>
          <button className="download_files_btn">Download files</button> &nbsp;
          <button className="approve_btn">Approve</button> &nbsp;
          <button className="reject_btn">Reject</button> &nbsp;
        </div>
        <br />
        <div className="applicant_deets">
          <p id="applicant_name">
            Jennifer Lopez
          </p>
          <p>
            Applicant email: jenniferlpz@bikeloan.com
          </p>
          <p>
            Loan amount: 100,000,000
          </p>
          <button className="download_files_btn">Download files</button> &nbsp;
          <button className="approve_btn">Approve</button> &nbsp;
          <button className="reject_btn">Reject</button> &nbsp;
        </div>
      </div>
    </div>
  );
}

export default DisplayUser;