import type { Certification } from "./types";

/**
 * Certifications.
 *
 * Intentionally empty for now — the CertificationList component renders a
 * friendly empty state until entries are added. To add one, push an object:
 *
 *   {
 *     id: "aws-saa",
 *     name: "AWS Certified Solutions Architect – Associate",
 *     issuer: "Amazon Web Services",
 *     date: "2026",
 *     credentialUrl: "https://...",
 *     icon: "amazonwebservices",
 *   }
 */
export const certifications: Certification[] = [];
