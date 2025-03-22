import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ThemeContext } from "../UserDashboardPages/Themes/ThemeProvider";

// Styled components
const PageWrapper = styled.div`
  background-color: ${(props) => props.theme.background};
  min-height: 100vh;
  color: ${(props) => props.theme.text};
  padding: 2rem;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.5rem;
`;

const SubTitle = styled.p`
  font-size: 1.25rem;
`;

const SectionContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Card = styled.div`
  background: ${(props) => props.theme.cardBackground};
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 8px;
  padding: 1.5rem;
`;

const ToggleButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.background};
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Settings = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken"); // Match the token key used in your login/logout
    if (!token) {
      setLoading(false);
      return;
    }

    const backendUrl = process.env.BACKEND_URL || "http://localhost:4000";
    fetch(`${backendUrl}/api/user/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch user data");
        }
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <PageWrapper theme={theme}>
      <Header>
        <Title>Settings</Title>
        <SubTitle>Manage your account, notifications, and preferences</SubTitle>
      </Header>
      <SectionContainer>
        <Card theme={theme}>
          <h2>Account Details</h2>
          {user ? (
            <>
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
            </>
          ) : loading ? (
            <p>Loading user data...</p>
          ) : (
            <p>No user data available. Please ensure you are logged in.</p>
          )}
        </Card>
        <Card theme={theme}>
          <h2>Theme Settings</h2>
          <p>Current Theme: {theme === lightTheme ? "Light" : "Dark"}</p>
          <ToggleButton theme={theme} onClick={toggleTheme}>
            Toggle Theme
          </ToggleButton>
        </Card>
      </SectionContainer>
    </PageWrapper>
  );
};

export default Settings;
