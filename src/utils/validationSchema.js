import * as yup from "yup";

export const getValidationSchema = (formType) => {
  switch (formType) {
    case "login":
      return yup.object({
        email: yup
          .string()
          .trim()
          .email("Invalid email format")
          .required("Email is required"),
        password: yup
          .string()
          .trim()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
      });

      case "register":
        return yup.object({
          name: yup.string().trim().required("First Name is required"),
          last_name: yup.string().trim().required("Last Name is required"),
          email: yup
            .string()
            .trim()
            .email("Invalid email format")
            .required("Email is required"),
          password: yup
            .string()
            .trim()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
          password_confirmation: yup
            .string()
            .trim()
            .oneOf([yup.ref("password")], "Passwords must match")
            .required("Confirm Password is required"),
        });
      
    case "tournament":
      return yup.object({
        tournament_category: yup.string().required("Tournament is required"),
        team_name: yup.string().trim().required("Team Name is required"),
        email: yup
          .string()
          .trim()
          .email("Invalid email format")
          .required("Email is required"),
        captain_name: yup.string().trim().required("Captain Name is required"),
        boat_name: yup.string().trim().required("Boat Name is required"),
        angler_name: yup.string().trim().required("Angler Name is required"),
        number_of_team_members: yup
          .number()
          .typeError("Must be a number")
          .min(1, "At least 1 team member required")
          .max(10, "Maximum 10 team members allowed")
          .required("Number of team members is required"),
      });
      case "tournamentEdit":
        return yup.object().shape({
          boat_name: yup.string().required("Boat name is required"),
          email: yup.string().email("Invalid email").required("Email is required"),
          captain_name: yup.string().required("Captain name is required"),
          angler_name: yup.string().required("Event name is required"),
          city: yup.string().required("City is required"),
          phone: yup.string().required("Phone is required"),
          state: yup.string().required("State is required"),
          address: yup.string().required("Address is required"),
        });
  
    case "category":
      return yup.object({
        title: yup.string().trim().required("Title is required"),
        event: yup.object().shape({
          value: yup.string().required("Event selection is required"),
          label: yup.string().required(),
        }),
        description: yup
          .string()
          .trim()
          .min(10, "Description must be at least 10 characters")
          .max(500, "Description cannot exceed 500 characters")
          .required("Description is required"),
      });
    // case "thread":
    //   return yup.object({
    //     title: yup.string().trim().required("Title is required"),
    //     description: yup.string().trim().required("Description is required"),
    //   });
    default:
      return yup.object({});
  }
};
