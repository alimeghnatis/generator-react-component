/* <%= pkg %> <%= version %> */
import { defineMessages } from "react-intl";

const messages = {
  title: {
    id: "<%=lower %>.title",
    defaultMessage: "Title",
    description: "Section headline",
  },
};

export default defineMessages(messages);
