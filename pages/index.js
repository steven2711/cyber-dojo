import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import ServicesSection from "../components/ServicesSection";
import TestimonialSection from "../components/TestimonialSection";
import PortfolioSection from "../components/PortfolioSection";
import ContactSection from "../components/ContactSection";
import AuditSection from "../components/AuditSection";

export default function HomePage() {
  return (
    <Layout>
      <ServicesSection />
      <TestimonialSection />
      {/* <PortfolioSection />
      <AuditSection /> */}
      <ContactSection />
    </Layout>
  );
}
