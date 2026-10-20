export const PIPELINE_STAGES = [
  { key: "new_lead", label: "New Lead" },
  { key: "contacted", label: "Contacted" },
  { key: "qualified", label: "Qualified" },
  { key: "proposal", label: "Proposal" },
  { key: "negotiation", label: "Negotiation" },
  { key: "won", label: "Won" },
  { key: "lost", label: "Lost" },
] as const;

export type PipelineStageKey = (typeof PIPELINE_STAGES)[number]["key"];

export const LEAD_SOURCES = [
  { key: "instagram", label: "Instagram" },
  { key: "tiktok", label: "TikTok" },
  { key: "facebook", label: "Facebook" },
  { key: "website", label: "Website" },
  { key: "google_ads", label: "Google Ads" },
  { key: "referral", label: "Referral" },
  { key: "event", label: "Event" },
  { key: "whatsapp", label: "WhatsApp" },
  { key: "other", label: "Lainnya" },
] as const;

export type LeadSourceKey = (typeof LEAD_SOURCES)[number]["key"];

export const PRIORITIES = [
  { key: "low", label: "Rendah" },
  { key: "medium", label: "Sedang" },
  { key: "high", label: "Tinggi" },
] as const;

export const ROLES = [
  { key: "admin", label: "Admin" },
  { key: "manager", label: "Manager" },
  { key: "sales", label: "Sales" },
] as const;

export type RoleKey = (typeof ROLES)[number]["key"];

export const ACTIVITY_STATUSES = [
  { key: "pending", label: "Menunggu" },
  { key: "completed", label: "Selesai" },
  { key: "cancelled", label: "Dibatalkan" },
] as const;
