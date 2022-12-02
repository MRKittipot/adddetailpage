import React from "react";
import FormLayout from "../common/FormLayout.common";
import Layout from "../components/Layout";
import AuthProvider from "../provider/AuthProvider";

const AddData = () => {
  return (
    <AuthProvider>
      <Layout>
        <FormLayout />
      </Layout>
    </AuthProvider>
  );
};

export default AddData;
