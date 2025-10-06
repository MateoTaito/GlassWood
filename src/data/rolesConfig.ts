export interface JobRole {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "full-time" | "part-time" | "contract" | "internship";
  experience: "junior" | "mid" | "senior" | "lead";
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  benefits: string[];
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
  postedDate: string;
  applicationDeadline?: string;
  isActive: boolean;
}

export const jobRoles: JobRole[] = [];

export const getActiveRoles = (): JobRole[] => {
  return jobRoles.filter(role => role.isActive);
};

export const getRoleById = (id: string): JobRole | undefined => {
  return jobRoles.find(role => role.id === id);
};

export const getRolesByDepartment = (department: string): JobRole[] => {
  return jobRoles.filter(
    role => role.department === department && role.isActive
  );
};

export const getDepartments = (): string[] => {
  const departments = new Set(jobRoles.map(role => role.department));
  return Array.from(departments);
};

export const toggleAllRolesActive = (active: boolean): void => {
  jobRoles.forEach(role => {
    role.isActive = active;
  });
};

export const toggleRoleActive = (roleId: string): boolean => {
  const role = getRoleById(roleId);
  if (role) {
    role.isActive = !role.isActive;
    return role.isActive;
  }
  return false;
};
