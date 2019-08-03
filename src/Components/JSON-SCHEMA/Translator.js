//Translator for schema
import React from "react";
import { FormattedMessage } from "react-intl";
import messages from "../../messages";
import { connect } from "react-redux";
import en from "react-intl/locale-data/en";

export function Translator(title) {
  // return <FormattedMessage id={title} defaultMessage={title} />;

  if (localStorage.getItem("lang") !== null) {
    return messages[localStorage.getItem("lang")][title];
  }
  return messages["en"][title];
}
