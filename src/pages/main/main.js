import React, { Component, Fragment } from "react";

import Header from "../component/Main/header.js";
import Carousel from "../component/Main/carousel.js";

import Form from "react-jsonschema-form";

import MainImg from "../../assets/img/dash2.jpg";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        personal: [
          {
            done: true,
            title: "My first task",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
          {
            done: false,
            title: "My second task",
            details:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
          },
        ],
      },
      schema: {
        title: "Informasi Data Pribadi (Wajib diisi)",
        type: "object",
        required: ["nama"],
        properties: {
          nama: {
            type: "string",
            format: "text",
            title: "Nama Lengkap",
            default: "",
            minlength: 6,
            maxlength: 6,
          },
          nik: {
            type: "string",
            format: "text",
            title: "NIK",
            default: "",
            minlength: 0,
            maxlength: 500,
          },
          loker: {
            type: "string",
            format: "text",
            title: "Loker",
            default: "",
            minlength: 20,
            maxlength: 20,
          },
          band: {
            type: "string",
            format: "text",
            title: "Band Posisi",
            default: "",
            minlength: 0,
            maxlength: 500,
          },
          posisi: {
            type: "string",
            format: "text",
            title: "Posisi",
            default: "",
            minlength: 0,
            maxlength: 500,
          },
          personal: {
            type: "array",
            title: "Personal Data",
            items: {
              type: "object",
              required: ["title"],
              properties: {
                title: {
                  type: "string",
                  title: "Title",
                  description: "A sample title",
                },
                details: {
                  type: "string",
                  title: "Task details",
                  description: "Enter the task details",
                },
                done: {
                  type: "boolean",
                  title: "Done?",
                  default: false,
                },
              },
            },
          },
        },
      },
      ui: {
        "ui:ObjectFieldTemplate": this.customField,
        nama: {
          "ui:widget": this.normalInput,
          "ui:options": {
            label: false,
          },
        },
        nik: {
          "ui:widget": this.normalInput,
          "ui:options": {
            label: false,
          },
        },
        loker: {
          "ui:widget": this.normalInput,
          "ui:options": {
            label: false,
          },
        },
        band: {
          "ui:widget": this.normalInput,
          "ui:options": {
            label: false,
          },
        },
        posisi: {
          "ui:widget": this.normalInput,
          "ui:options": {
            label: false,
          },
        },
        personal: {
          "ui:ArrayFieldTemplate": this.customFieldArray,
          items: {
            details: {
              "ui:widget": "textarea",
            },
          },
        },
      },
    };
  }

  CustomTitleField = (props) => {
    console.log("Title ", props);
    const legend = props.required ? (
      <div style={{ color: "#616161", fontWeight: "700" }}>
        {props.title}
        <span style={{ color: "red" }}>*</span>
      </div>
    ) : (
      <div style={{ color: "black", fontWeight: "700" }}>{props.title}</div>
    );
    return <div style={{ marginBottom: "1rem" }}>{legend}</div>;
  };

  // Dynamic Form Component
  normalInput = (props) => {
    const legend = props.required ? (
      <div>
        {props.schema.title}
        <span className="danger-color">*</span>
      </div>
    ) : (
      <div>{props.schema.title}</div>
    );
    return (
      <>
        <span className="text-gray">{legend}</span>
        <input
          style={{
            border: "none",
            borderBottom: `2px solid red`,
            padding: "5px 0px",
            width: "100%",
            outline: "none",
            fontSize: "20px",
          }}
          type={props.schema.format}
          value={
            props.schema.format === "date"
              ? props.value.toLocaleString("id-ID")
              : props.value
          }
          required={props.required}
          onChange={(event) => props.onChange(event.target.value)}
        />
      </>
    );
  };

  fileInput = (props) => {
    const legend = props.required ? (
      <div>
        {props.schema.title}
        <span className="text-important">*</span>
      </div>
    ) : (
      <div>{props.schema.title}</div>
    );
    return (
      <>
        <span className="text-gray control-label" for="root_filesAccept">
          {legend}
        </span>
        <input
          style={{
            border: "none",
            borderBottom: `2px solid red`,
            padding: "5px 0px",
            width: "100%",
            outline: "none",
            fontSize: "20px",
          }}
          type="text"
          value={props.value !== undefined ? props.value : "Upload File"}
        />
        <div
          className="body-inline"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "relative",
            bottom: "45px",
          }}
        >
          <label>
            <input
              id={props.id}
              type="file"
              name={props.options.name}
              multiple={props.options.multiple}
              accept={props.options.accept}
              onChange={(event) => this.handleChangeFile(event)}
              // onChange={event => props.onChange(event.target.files[0])}
            />
            <div
              style={{
                backgroundColor: "#E8AB3A",
                color: "white",
                borderRadius: "5px",
                padding: "10px 25px",
              }}
            >
              <i>Upload Evidence</i>
            </div>
          </label>
        </div>
      </>
    );
  };

  customField = (props) => {
    console.log("custom ", props);
    const legend = props.required ? (
      <div style={{ color: "#616161", fontWeight: "700" }}>
        {props.title}
        <span style={{ color: "red" }}>*</span>
      </div>
    ) : (
      <div style={{ color: "black", fontWeight: "700" }}>{props.title}</div>
    );
    return (
      <div className={props.classNames}>
        <div className="body-content">
          <div style={{ marginTop: "10px", marginBottom: "10px" }}>
            {legend}
          </div>
          {props.description}
          {props.properties.map((element) => (
            <div className="property-wrapper">{element.content}</div>
          ))}
        </div>
        {props.description}
        {props.errors}
        {props.help}
      </div>
    );
  };

  customFieldArray = (props) => {
    console.log("Array", props);
    const legend = props.required ? (
      <div style={{ color: "#616161", fontWeight: "700" }}>
        {props.title}
        <span style={{ color: "red" }}>*</span>
      </div>
    ) : (
      <div style={{ color: "black", fontWeight: "700" }}>{props.title}</div>
    );
    return (
      <div className={props.classNames}>
        <div className="sap-top"></div>
        <div className="sap-content">
          <div className="body-content">
            <div style={{ marginTop: "20px" }}>
              <div>{legend}</div>
              {props.items.map((element) => element.children)}
              {props.canAdd && (
                <button type="button" onClick={props.onAddClick}></button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const fields = {
      TitleField: this.CustomTitleField,
    };
    const log = (type) => console.log.bind(console, type);
    return (
      <>
        <Form
          schema={this.state.schema}
          uiSchema={this.state.ui}
          formData={this.state.formData}
          onChange={log("changed")}
          onSubmit={log("submitted")}
          onError={log("errors")}
          fields={fields}
          // widgets={widgets}
        />
        {/* <div>
          <img
            src={MainImg}
            alt="DashMain"
            style={{ width: "100%", height: "auto" }}
            width="1440px"
            height="400px"
          />
        </div>
        <div style={{ position: "relative", bottom: "10px" }}>
          <Header />
          <Carousel />
          <h3>Sticky Navigation Bar Example</h3>
          <p>
            The navbar will <strong>stick</strong> to the top when you reach its
            scroll position.
          </p>
          <p>
            <strong>Note:</strong> Internet Explorer, Edge 15 and earlier
            versions do not support sticky positioning. Safari requires a
            -webkit- prefix.
          </p>
          <p>
            Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
            definitiones no quo, maluisset concludaturque et eum, altera fabulas
            ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
            Eum no molestiae voluptatibus.
          </p>
          <p>
            Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
            definitiones no quo, maluisset concludaturque et eum, altera fabulas
            ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
            Eum no molestiae voluptatibus.
          </p>
          <p>
            Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
            definitiones no quo, maluisset concludaturque et eum, altera fabulas
            ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
            Eum no molestiae voluptatibus.
          </p>
          <p>
            Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
            definitiones no quo, maluisset concludaturque et eum, altera fabulas
            ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
            Eum no molestiae voluptatibus.
          </p>
          <p>
            Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
            definitiones no quo, maluisset concludaturque et eum, altera fabulas
            ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
            Eum no molestiae voluptatibus.
          </p>
          <p>
            Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
            definitiones no quo, maluisset concludaturque et eum, altera fabulas
            ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
            Eum no molestiae voluptatibus.
          </p>
          <p>
            Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
            definitiones no quo, maluisset concludaturque et eum, altera fabulas
            ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
            Eum no molestiae voluptatibus.
          </p>
        </div>
         */}
      </>
    );
  }
}

export default MainPage;
