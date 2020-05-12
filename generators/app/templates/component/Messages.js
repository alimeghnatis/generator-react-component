/* <%= pkg %> <%= version %> */
import { defineMessages } from "react-intl";

const messages = {
  title: {
    id: "<%= name %>.title",
    defaultMessage: "Title",
    description: "Section headline",
  },
};

export default defineMessages(messages);
