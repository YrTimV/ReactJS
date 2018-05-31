import './PageContacts.scss';
import React from 'react';

export default class PageContacts extends React.PureComponent {
  render() {
    const { content: { email, skype, address, mapUrl } } = this.props;

    return (
      <div className="contacts">
        Email: <span className="contactsField">{email}</span>
        <br/><br/>
        Skype: <span className="contactsField">{skype}</span>
        <br/><br/>
        Address: <span className="contactsField">{address}</span>
        <br/><br/>
        <iframe className="contactsMap" src={mapUrl}></iframe>
      </div>
    );
  }
}
