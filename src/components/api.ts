import axios from "axios";

const API_URL =
  "https://dev-cms.oyelabs.com/api/landing-pages/pz5df6r6luyf0b7nrwhqziwz";

export const fetchHeroData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching hero data:", error);
    throw error; // Rethrow the error for handling in the component
  }
};
export const fetchServices = async () => {
  try {
    const response = await axios.get(
      `https://dev-cms.oyelabs.com/api/services`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching hero data:", error);
    throw error; // Rethrow the error for handling in the component
  }
};
export const fetchPortFolio = async () => {
  try {
    const response = await axios.get(
      `https://dev-cms.oyelabs.com/api/portfolios`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching hero data:", error);
    throw error; // Rethrow the error for handling in the component
  }
};
export const fetchFooter = async () => {
  try {
    const response = await axios.get(`https://dev-cms.oyelabs.com/api/footers`);
    return response.data;
  } catch (error) {
    console.error("Error fetching hero data:", error);
    throw error; // Rethrow the error for handling in the component
  }
};
export const fetchTags = async () => {
  try {
    const response = await axios.get(`https://dev-cms.oyelabs.com/api/tags`);
    return response.data;
  } catch (error) {
    console.error("Error fetching hero data:", error);
    throw error; // Rethrow the error for handling in the component
  }
};
export const fetchFeatures = async () => {
  try {
    const response = await axios.get(
      `https://dev-cms.oyelabs.com/api/features`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching hero data:", error);
    throw error; // Rethrow the error for handling in the component
  }
};
export const fetchLandingPage = async (id: any) => {
  try {
    const response = await axios.get(
      `https://dev-cms.oyelabs.com/api/landing-pages/${id}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching hero data:", error);
    throw error; // Rethrow the error for handling in the component
  }
};
export const fetchSeoContent = async (id: any) => {
  try {
    const response = await axios.get(
      `https://dev-cms.oyelabs.com/api/meta-tags/${id}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching hero data:", error);
    throw error; // Rethrow the error for handling in the component
  }
};


