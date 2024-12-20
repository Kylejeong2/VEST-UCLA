"use client";

import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const WorkWithUs = () => {
  const [activeTab, setActiveTab] = useState<"VC" | "Startup">("VC");
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    companyInfo: "",
    requirements: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/work-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          type: activeTab,
        }),
      });

      if (!response.ok) throw new Error("Submission failed");

      setSubmitStatus("success");
      setFormData({
        companyName: "",
        contactName: "",
        email: "",
        companyInfo: "",
        requirements: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Wrapper>
      <Inner>
        <Header>
          <h1>Work with Us</h1>
          <p>Partner with UCLA's premier VC/Startup organization</p>
        </Header>

        <Tabs>
          <Tab active={activeTab === "VC"} onClick={() => setActiveTab("VC")}>
            For VC Firms
            {activeTab === "VC" && <ActiveIndicator layoutId="activeTab" />}
          </Tab>
          <Tab
            active={activeTab === "Startup"}
            onClick={() => setActiveTab("Startup")}
          >
            For Startups
            {activeTab === "Startup" && (
              <ActiveIndicator layoutId="activeTab" />
            )}
          </Tab>
        </Tabs>

        <AnimatePresence mode="wait">
          <Content
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {activeTab === "VC" ? (
              <InfoSection>
                <h2>VC Partnership Benefits</h2>
                <Benefits>
                  <Benefit>
                    <h3>Deal Flow Support</h3>
                    <p>
                      Our talented students help source and evaluate potential
                      investments, providing detailed analysis and fresh
                      perspectives.
                    </p>
                  </Benefit>
                  <Benefit>
                    <h3>Market Research</h3>
                    <p>
                      Get comprehensive market research and competitive analysis
                      to support your investment decisions.
                    </p>
                  </Benefit>
                  <Benefit>
                    <h3>Due Diligence</h3>
                    <p>
                      Leverage our team's expertise for thorough due diligence
                      processes and investment memorandums.
                    </p>
                  </Benefit>
                </Benefits>
              </InfoSection>
            ) : (
              <InfoSection>
                <h2>Startup Partnership Benefits</h2>
                <Benefits>
                  <Benefit>
                    <h3>Technical Support</h3>
                    <p>
                      Access our pool of talented developers and designers for
                      your technical needs.
                    </p>
                  </Benefit>
                  <Benefit>
                    <h3>Growth Strategy</h3>
                    <p>
                      Get help with market analysis, user acquisition
                      strategies, and growth planning.
                    </p>
                  </Benefit>
                  <Benefit>
                    <h3>Design & UI/UX</h3>
                    <p>Get help with design and UI/UX for your product.</p>
                  </Benefit>
                </Benefits>
              </InfoSection>
            )}

            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Company Name</Label>
                <Input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Contact Name</Label>
                <Input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Tell us about your company</Label>
                <TextArea
                  name="companyInfo"
                  value={formData.companyInfo}
                  onChange={handleChange}
                  required
                  rows={4}
                />
              </FormGroup>

              <FormGroup>
                <Label>What would you like to work on with us?</Label>
                <TextArea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  required
                  rows={4}
                />
              </FormGroup>

              <SubmitButton
                type="submit"
                disabled={isSubmitting}
                status={submitStatus}
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </SubmitButton>

              {submitStatus === "success" && (
                <StatusMessage success>
                  Request submitted successfully! We'll be in touch soon.
                </StatusMessage>
              )}
              {submitStatus === "error" && (
                <StatusMessage>
                  Something went wrong. Please try again.
                </StatusMessage>
              )}
            </Form>
          </Content>
        </AnimatePresence>
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2rem 0;
  background: var(--Background);
`;

const Inner = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 4rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }

  p {
    color: var(--link-color);
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const Tabs = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  position: relative;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 1rem 2rem;
  background: none;
  border: none;
  color: ${(props) => (props.active ? "var(--white)" : "var(--link-color)")};
  font-size: 1.125rem;
  cursor: pointer;
  position: relative;
  transition: color 0.2s ease;

  &:hover {
    color: var(--white);
  }
`;

const ActiveIndicator = styled(motion.div)`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--emerald);
`;

const Content = styled(motion.div)`
  margin-top: 3rem;
`;

const InfoSection = styled.div`
  margin-bottom: 3rem;

  h2 {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 2rem;
  }
`;

const Benefits = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const Benefit = styled.div`
  h3 {
    color: var(--emerald);
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  p {
    color: var(--link-color);
    line-height: 1.6;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: var(--white);
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: var(--white);
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: var(--emerald);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: var(--white);
  font-size: 1rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: var(--emerald);
  }
`;

const SubmitButton = styled.button<{ status: "idle" | "success" | "error" }>`
  padding: 1rem 2rem;
  border-radius: 2rem;
  border: none;
  background: var(--emerald);
  color: var(--white);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const StatusMessage = styled.div<{ success?: boolean }>`
  padding: 1rem;
  border-radius: 0.5rem;
  background: ${(props) =>
    props.success ? "rgba(52, 211, 153, 0.1)" : "rgba(239, 68, 68, 0.1)"};
  color: ${(props) => (props.success ? "#34D399" : "#EF4444")};
  text-align: center;
`;

export default WorkWithUs;
