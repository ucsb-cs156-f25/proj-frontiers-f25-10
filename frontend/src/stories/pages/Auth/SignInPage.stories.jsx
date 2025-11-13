import React from "react";
import { systemInfoFixtures } from "fixtures/systemInfoFixtures";
import { http, HttpResponse } from "msw";
import SignInPage from "main/pages/Auth/SignInPage";

export default {
  title: "pages/Auth/SignInPage",
  component: SignInPage,
  argTypes: {
    alert: {
      control: "text",
      description: "Alert message to display"
    },
    alertVariant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark"
      ],
      description: "Bootstrap alert variant"
    },
    onClick: {
      action: "clicked",
      description: "Click handler for sign-in cards"
    }
  }
};

const Template = args => <SignInPage {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  msw: {
    handlers: [
      http.get("/api/currentUser", () => {
        return HttpResponse.json(
          {},
          {
            status: 403
          }
        );
      }),
      http.get("/api/systemInfo", () => {
        return HttpResponse.json(systemInfoFixtures.showingNeither, {
          status: 200
        });
      })
    ]
  }
};

export const WithActiveDirectory = Template.bind({});
WithActiveDirectory.parameters = {
  msw: {
    handlers: [
      http.get("/api/currentUser", () => {
        return HttpResponse.json(
          {},
          {
            status: 403
          }
        );
      }),
      http.get("/api/systemInfo", () => {
        return HttpResponse.json(systemInfoFixtures.withActiveDirectory, {
          status: 200
        });
      })
    ]
  }
};

export const WithBothActiveDirectoryAndGoogle = Template.bind({});
WithBothActiveDirectoryAndGoogle.parameters = {
  msw: {
    handlers: [
      http.get("/api/currentUser", () => {
        return HttpResponse.json(
          {},
          {
            status: 403
          }
        );
      }),
      http.get("/api/systemInfo", () => {
        return HttpResponse.json(
          systemInfoFixtures.withActiveDirectoryAndGoogle,
          {
            status: 200
          }
        );
      })
    ]
  }
};

export const WithAlert = Template.bind({});
WithAlert.args = {
  alert: "This is a test alert message",
  alertVariant: "warning"
};
WithAlert.parameters = {
  msw: {
    handlers: [
      http.get("/api/currentUser", () => {
        return HttpResponse.json(
          {},
          {
            status: 403
          }
        );
      }),
      http.get("/api/systemInfo", () => {
        return HttpResponse.json(
          systemInfoFixtures.withActiveDirectoryAndGoogle,
          {
            status: 200
          }
        );
      })
    ]
  }
};
