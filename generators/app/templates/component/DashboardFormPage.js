/* @fwrlines/generator-react-component 2.2.5 */
import * as React from 'react'
import { useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'

import {
  Button,
  Heading,
  ClientSiteLocationMap as LocationMap,
  FormContextProvider,
  FormContextDebugger,
  FormInput,
  useFormMutation,
  useForm,
  useSession
} from '@fwrlines/ds'

import LOCAL_URLS from '../urls.js'

import { DashboardPage as Page, ModificationCounter } from '../components'

import { Link } from 'react-router-dom'

import { useClientLocation } from 'app/common/components'

import MUTATION_UPDATE_MY_LOCATION from './graphql/updateMyLocation.gql'

//Config
//import C from 'ui/cssClasses'

//Intl

import { FormattedMessage, useIntl } from 'react-intl'
import messages from './<%= name %>.messages'
// <FormattedMessage {...messages.title} />

//const baseClassName = 'page_shop_details'
const baseId = 'page_shop_details'

const helmet = {
  robots   :'noindex, nofollow',
  title    :'test of the title',
  title_tag:'this should appear in the title tag'

  /*
  canonical          :'https://home.com/description',
  meta_description   :'This is the meta description. 170 chars.',
  twitter_title      :'For twitter, a title',
  twitter_description:'',
  twitter_image      :'',
  og_title           :'This is the open graph title',
  og_description     :'',
  og_image           :'',
  og_type            :'',
  og_url             :'',
  */
}

const mainHeadingProps = {
  //id,
  //className:'uc',
  //style,
  //children, //appended at bottom

  //headingClassName:'ts-green',
  headingAs:'h1'
  //headingProps :{}

  //label           :'Film',
  //labelClassName  :'x-red basic',
  //labelAs:'p',
  //labelProps :{}
}


/**
 * Page `WebsiteContactInfo`
 * Description :
 */
const <%= name %> = ({
  history,
  location,
  match
}) => {
  
  const {
    currentLocation,
    refetchLocation
  } = useClientLocation()

  const { whatsappNumber, whatsappNumberDescription, website } = currentLocation
  const { isContactFormEnabled } = website
  const {
    currentUserData
  } = useSession()

  const initialVars = { //TODO
    whatsappNumber,
    whatsappNumberDescription,
    isContactFormEnabled,
    contactEmail:currentUserData.email
  }

  const intl = useIntl()

  const {
    values,
    mergeValues
  } = useForm()

  useEffect(() => {
    //console.log(values, initialVars, currentLocation)
    mergeValues(initialVars)
  }, [currentLocation.updatedAt, currentLocation.website?.updatedAt])

  const {
    mutate,
    loading,
    error,
    response,
    diffCount
  } = useFormMutation(
    MUTATION_UPDATE_MY_LOCATION, //TODO
    {
      id                 :currentLocation.id,
      removeVariables    :['contactEmail'], //TODO
      additionalVariables:{
        //id:'2'
      },
      compareWithOriginalObject:initialVars,
      refetch                  :refetchLocation
    }
  )

  const testCondition = (cond) => {
    if (typeof cond === 'function') {
      return cond(values)
    }
    else if (cond === true) {
      return cond
    }
    return false
  }

  const inputs = useMemo(() => [
    {
      className  :'span-wide',
      name       :'whatsappNumber',
      inputId    :'whatsappNumber',
      type       :'tel',
      placeholder:'ej:5512341234',
      //label      :<FormattedMessage {...messages.fieldWhatsappLabel} />,
      //description:<FormattedMessage {...messages.fieldWhatsappDescription} />,
      optional   :true,
      condition  :true
    },
    {/*
    {
      className  :'span-wide',
      name       :'whatsappNumberDescription',
      inputId    :'whatsappNumberDescription',
      type       :'text',
      placeholder:'ej:Para todos sus pedidos, de lunes a viernes 7AM - 6PM',
      label      :<FormattedMessage {...messages.fieldWhatsappDescriptionLabel} />,
      description:<FormattedMessage {...messages.fieldWhatsappDescriptionDescription} />,
      limitCount :65,
      cleanup    :false,
      optional   :true,
      condition  :values => values.whatsappNumber
    },
    {
      className  :'span-wide',
      name       :'isContactFormEnabled',
      inputId    :'isContactFormEnabled',
      type       :'checkbox',
      //placeholder:'AutofficinaRossi',
      label      :<FormattedMessage {...messages.fieldIsContactFormEnabledLabel} />,
      description:<FormattedMessage {...messages.fieldIsContactFormEnabledDescription} />,
      optional   :true,
      condition  :true
    },
    {
      className  :'span-wide',
      name       :'contactEmail',
      inputId    :'contactEmail',
      disabled   :true,
      type       :'email',
      placeholder:'manuel.ponce@gmail.com',
      label      :<FormattedMessage {...messages.fieldContactEmailLabel} />,
      description:<FormattedMessage {...messages.fieldContactEmailDescription} />,
      cleanup    :false,
      condition  :values => values.isContactFormEnabled
    }*/}
  ], [])

  return (
    <Page
      id={baseId}
      className="u1 md-u2"
      //itemType="https://schema.org/FAQPage"
      HELMET={helmet}
      footer={
          <Page.Footer
  {...{
    mutate,
    loading,
    diffCount
  }}
          />

      }
    >
      <Page.Section
        head
        heading={<FormattedMessage {...messages.title} />}
        subtitle={<FormattedMessage {...messages.subtitle} />}
      />
      <Page.Section
        form
        //heading={<FormattedMessage {...messages.sectionWhatsappTitle} />}
      >
        {inputs
          .slice(0,2)
          .filter(input => testCondition(input.condition))
          .map(input => (
            <FormInput
              key={input.name}
              {...input}
            />
          ))
        }

      </Page.Section>
      <Page.Section
        form
        //heading={<FormattedMessage {...messages.sectionContactFormTitle} />}
      >
        {inputs
          .slice(2,4)
          .filter(input => testCondition(input.condition))
          .map(input => (
            <FormInput
              key={input.name}
              {...input}
            />
          ))
        }
      </Page.Section>
      {/*
      <FormContextDebugger />
      */}
  
    </Page>
  )
}

  <%= name %>.propTypes = {

  /**
   *
   */
  someprop:PropTypes.node

  /*
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  : PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  children: PropTypes.node,
  : PropTypes.func,
  styles: PropTypes.object,
  : PropTypes.oneOf(['', ''])
  */
}

/*
WebsiteContactInfo.defaultProps = {
  status: 'neutral',
}
*/


export default (props) => {

  const intl = useIntl()

  const validationMap = useMemo(() => ({
    //   :(v) => v && ((v.length < 4) || (v.length > 20)) && intl.formatMessage(messages.validationFirstNameGeneric),
    //lastName    :(v) => v && ((v.length < 4) || (v.length > 20)) && intl.formatMessage(messages.validationLastNameGeneric),
    //whatsappNumber           :(v) => v && ((String(v).length != 10) || !/^\d+$/.test(v)) && intl.formatMessage(messages.validationWhatsappNumberGeneric),
    //whatsappNumberDescription:(v) => v && (v.length > 65) && intl.formatMessage(messages.validationWhatsappNumberDescriptionGeneric)
    //address     :(v) => v && ((v.length < 4) || (v.length > 35)) && intl.formatMessage(messages.validationAddressGeneric),
    //address2    :(v) => v?.length && ((v.length < 4) || (v.length > 35)) && intl.formatMessage(messages.validationAddressGeneric),
    //colony      :(v) => v?.length && ((v.length < 4) || (v.length > 30)) && intl.formatMessage(messages.validationColonyGeneric),
    //city        :(v) => v && ((v.length < 4) || (v.length > 35)) && intl.formatMessage(messages.validationCityGeneric),
    //postcode    :(v) => v && ((v.length != 5) || !/^\d+$/.test(v)) && intl.formatMessage(messages.validationPostcodeGeneric),
    //siteSubtitle:(v) => v && ((v.length < 10) || (v.length > 45)) && intl.formatMessage(messages.validationSubtitleGeneric),
    //subdomain   :(v) => {
    //  if (!v) return false
    //  if (v.length < 4) return intl.formatMessage(messages.validationSubdomainGeneric)
    //  let errors = []
    //  if (v.length > 25) errors.push(intl.formatMessage(messages.validationSubdomainGeneric))
    //  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(v)) errors.push(intl.formatMessage(messages.validationSubdomainCharacters))
    //  return errors.length ? errors : false

  }), [])

  return (
    <FormContextProvider
      parsers={{
        whatsappNumber:Number
      }}
      validation={validationMap}
    >
      <<%= name %> {...props} />
    </FormContextProvider>
  )
}
