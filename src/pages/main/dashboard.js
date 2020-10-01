import React, { Component } from "react";
import Form from "react-jsonschema-form";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: { ...props.formData },
      schema: {
        definitions: {
          largeEnum: {
            type: "string",
            enum: [
              "option #0",
              "option #1",
              "option #2",
              "option #3",
              "option #4",
              "option #5",
            ],
            enumNames: ["a", "b", "c", "d", "e"],
          },
        },
        title: "form ukuran besar",
        type: "object",
        required: ["inputcss"],
        properties: {
          string: {
            type: "string",
            title: "Some string",
          },
          choice1: {
            $ref: "#/definitions/largeEnum",
          },
          choice2: {
            $ref: "#/definitions/largeEnum",
          },
          color: {
            type: "string",
            title: "color picker",
            default: "#151ce6",
          },
          inputcss: {
            type: "string",
            title: "ui Option",
          },
          filesAccept: {
            type: "array",
            title: "sss",
            items: {
              type: "string",
              format: "data-url",
            },
          },
          alternative: {
            title: "Alternative",
            description: "These work on most platforms.",
            type: "object",
            properties: {
              "alt-datetime": {
                type: "string",
                format: "date-time",
              },
              "alt-date": {
                type: "string",
                format: "date",
              },
            },
          },
        },
      },
      ui: {
        color: {
          "ui:widget": "color",
        },
        inputcss: {
          // "ui:widget": this.inputForm,
          "ui:widget": (props) => {
            console.log("custom UI", props);
            const legend = props.required
              ? props.schema.title + "*"
              : props.schema.title;
            return (
              <>
                <h3>{legend}</h3>
                <input
                  style={{
                    border: "none",
                    // borderBottom: `2px solid ${props.formData.color}`,
                    margin: "5px",
                    padding: "10px 0px",
                    width: "100%",
                    outline: "none",
                    fontSize: "20px",
                  }}
                  type={props.options.inputType}
                  required={props.required}
                  onChange={(event) => props.onChange(event.target.value)}
                />
              </>
            );
          },
          "ui:options": {
            label: false,
            inputType: "tel",
          },
        },
        filesAccept: {
          "ui:widget": (props) => {
            console.log("real array = ", props);
            const legend = props.required
              ? props.schema.title + "*"
              : props.schema.title;
            return (
              <div>
                <p>
                  <input
                    id="root_filesAccept"
                    type="file"
                    multiple=""
                    accept={props.options.accept}
                    value=""
                  />
                </p>
                <ul class="file-info"></ul>
              </div>
            );
          },
          "ui:options": {
            accept: ".pdf, image/*",
            label: false,
          },
        },
        alternative: {
          "alt-datetime": {
            "ui:widget": "alt-datetime",
            "ui:options": {
              yearsRange: [1980, 2031],
            },
          },
          "alt-date": {
            "ui:widget": "alt-date",
            "ui:options": {
              yearsRange: [1980, 2031],
            },
          },
        },
      },
    };
  }

  render() {
    const log = (type) => console.log.bind(console, type);
    return (
      <div>
        <Form
          schema={this.state.schema}
          formData={this.state.formData}
          uiSchema={this.state.ui}
          onChange={log("changed")}
          onSubmit={log("submitted")}
          onError={log("errors")}
          showErrorList={false}
        />
      </div>
    );
  }
}

export default Dashboard;
