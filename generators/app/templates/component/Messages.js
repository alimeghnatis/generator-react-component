/* <%= pkg %> <%= version %> */
import { defineMessages } from "react-intl"

const messages = {
  title: {
    id: "ds.<%=lower %>.title",
    defaultMessage: "",
    description: "",
  },
  /*
  pppTitle:{
    id            :'app.<%= lower %>.pages.ppp.title',
    defaultMessage:'',
    description   :'Page Title'
  },
  pppSubtitle:{
    id            :'app.<%= lower %>.pages.ppp.subtitle',
    defaultMessage:'',
    description   :'Page Subtitle'
  },
  */
}

export default defineMessages(messages)
