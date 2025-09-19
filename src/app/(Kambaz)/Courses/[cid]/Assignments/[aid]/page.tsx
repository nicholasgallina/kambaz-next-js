export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" style={{ maxWidth: 600 }}>
      {/* Assignment name */}
      <label htmlFor="wd-name">Assignment Name</label>
      <br />
      <input
        id="wd-name"
        defaultValue="A1 - ENV + HTML"
        style={{ width: "100%" }}
      />
      <br />

      {/* Description */}
      <textarea
        id="wd-description"
        rows={6}
        style={{ width: "100%" }}
        defaultValue={`The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.`}
      />
      <br />
      <br />

      {/* Points */}
      <label htmlFor="wd-points">Points</label>
      <input id="wd-points" defaultValue={100} style={{ marginLeft: 10 }} />
      <br />
      <br />

      {/* Assignment group */}
      <label htmlFor="wd-group">Assignment Group</label>
      <select
        id="wd-group"
        defaultValue="ASSIGNMENTS"
        style={{ marginLeft: 10 }}
      >
        <option>ASSIGNMENTS</option>
        <option>QUIZZES</option>
        <option>EXAMS</option>
        <option>PROJECT</option>
      </select>
      <br />
      <br />

      {/* Display grade */}
      <label htmlFor="wd-grade-display">Display Grade as</label>
      <select
        id="wd-grade-display"
        defaultValue="Percentage"
        style={{ marginLeft: 10 }}
      >
        <option>Percentage</option>
        <option>Complete/Incomplete</option>
        <option>Letter Grade</option>
        <option>Points</option>
      </select>
      <br />
      <br />

      {/* Submission type */}
      <label htmlFor="wd-submission-type">Submission Type</label>
      <select
        id="wd-submission-type"
        defaultValue="Online"
        style={{ marginLeft: 10 }}
      >
        <option>Online</option>
        <option>On Paper</option>
        <option>No Submission</option>
      </select>
      <br />
      <br />

      {/* Online entry options */}
      <div style={{ marginLeft: 20 }}>
        <label>Online Entry Options</label>
        <br />
        <input type="checkbox" id="entry-text" />{" "}
        <label htmlFor="entry-text">Text Entry</label>
        <br />
        <input type="checkbox" id="entry-url" />{" "}
        <label htmlFor="entry-url">Website URL</label>
        <br />
        <input type="checkbox" id="entry-media" />{" "}
        <label htmlFor="entry-media">Media Recordings</label>
        <br />
        <input type="checkbox" id="entry-annotation" />{" "}
        <label htmlFor="entry-annotation">Student Annotation</label>
        <br />
        <input type="checkbox" id="entry-file" />{" "}
        <label htmlFor="entry-file">File Uploads</label>
      </div>
      <br />

      {/* Assign to */}
      <label htmlFor="wd-assign-to">Assign to</label>
      <input
        id="wd-assign-to"
        defaultValue="Everyone"
        style={{ marginLeft: 10 }}
      />
      <br />
      <br />

      {/* Due */}
      <label htmlFor="wd-due">Due</label>
      <input
        id="wd-due"
        type="date"
        defaultValue="2024-05-13"
        style={{ marginLeft: 10 }}
      />
      <br />
      <br />

      {/* Available from / until */}
      <label htmlFor="wd-available-from">Available from</label>
      <input
        id="wd-available-from"
        type="date"
        defaultValue="2024-05-06"
        style={{ marginLeft: 10 }}
      />
      <label htmlFor="wd-until" style={{ marginLeft: 20 }}>
        Until
      </label>
      <input
        id="wd-until"
        type="date"
        defaultValue="2024-05-20"
        style={{ marginLeft: 10 }}
      />
      <br />
      <br />
      <hr></hr>

      {/* Buttons */}
      <button id="wd-cancel" style={{ marginRight: 10 }}>
        Cancel
      </button>
      <button id="wd-save">Save</button>
    </div>
  );
}
