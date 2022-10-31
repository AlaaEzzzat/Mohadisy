export interface ProfileData {
  appointments: {
    appointments: [];
    latestAppointment: [];
  };
  completedProjects: [];
  currentProjects: [{}];
  overview: {
    completedProjectsNumber: number;
    pricequotesNumber: number;
    projectsNumber: number;
  };
  projectsChart: {
    completedProjectsNumber: number;
    currentPriceQuotesNumber: number;
    currentProjectsNumber: number;
    totalProjectsNumber: number;
  };
}
