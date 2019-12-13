import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/mqkaorlk"
        method="POST"
      >
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea rows="10" cols="50" name="message" placeholder="Message" />
        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
        <style jsx>{`
          form {
            display: flex;
            flex-direction: column;
            margin:0 auto;
          }
          input, textarea {
            border: none;
            padding: 1rem 1.5rem;
            margin-bottom: 0.5rem;
          }
          input:focus, textarea:focus {
            outline: none;
          }
          input::placeholder, textarea::placeholder {
            font-size:1rem;
          }
          input, textarea {
            background: #252d3f;
            color: #fff;
          }
          input::placeholder, textarea::placeholder {
            color: #fff;
          }
          button {
            align-self: flex-end;
          }
        `}</style>
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
