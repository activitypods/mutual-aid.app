// Model https://github.com/marmelab/react-admin/blob/master/packages/ra-language-french/src/index.ts

module.exports = {
  app: {
    action: {
      contact_organizer: 'Contact organizer',
      copy: 'Copy to clipboard',
      continue: 'Continue',
      create_ad: 'Post an ad',
      send: 'Send',
      send_invitation: 'Send invitation |||| Send %{smart_count} invitations',
      share: 'Share',
    },
    page: {
      post: 'Post an ad',
      addresses: 'My addresses',
      network: 'My network',
      profile: 'My profile',
    },
    modal: {
      share_ad: 'Share ad'
    },
    block: {
      contact_poster: 'Contact poster',
      contact_poster_short: 'Contact',
      conditions: 'Conditions',
      welcome: 'Welcome to %{app_name}!',
      welcome_text: "%{app_name} is a app for classified ads that are only visible to people who are part of your trusted network. Contrary to most of sites of this kind which are very \"business\" oriented, the main intention of this site is to help each other. This does not prevent you from buying or selling, because for the moment we all need money to live. Enjoy!"
    },
    input: {
      about_you: 'A few words about you',
      conditions: 'Conditions',
      date: 'Date',
      duration: 'Duration',
      message: 'Message',
      user_id: 'User ID',
      resource_type: 'Resource type',
      exchange_type: "Exchange type",
    },
    choice: {
      offer: "I offer",
      request: "I'm looking for",
      atom_based_resource: 'Material',
      human_based_resource: 'Human (service, skill...)',
      other_resource: 'Other',
      gift: 'Gift',
      barter: 'Barter',
      sale: 'Sale',
      purchase: 'Purchase',
      loan: 'Loan',
      borrowing: 'Borrowing',
    },
    conditions: {
      gift: 'Gift conditions',
      barter: 'Barter conditions',
      sale: 'Sale conditions',
      purchase: 'Purchase conditions',
      loan: 'Loan conditions',
      borrowing: 'Borrowing conditions',
      other: 'Other conditions'
    },
    types: {
      sale_offer: 'Sale offer',
      barter_offer: 'Barter offer',
      loan_offer: 'Loan offer',
      gift_offer: 'Gift offer',
      rent_offer: 'Rent offer',
      purchase_request: 'Purchase request',
      barter_request: 'Barter request',
      loan_request: 'Loan request',
      gift_request: 'Gift request',
      rent_request: 'Rent request',
      atom_based_resource: 'Material',
      human_based_resource: 'Human',
      other_resource: 'Other',
    },
    helper: {
      message_profile_show_right:
        'Sending a message to %{username} will give him/her the right to see your profile, in order to be able to respond.',
      no_contact: 'You must add contacts to your network to be able to invite them',
    },
    message: {
      copied_to_clipboard: 'Copied !'
    },
    notification: {
      invitation_sent: '1 invitation sent |||| %{smart_count} invitations sent',
      profile_data_not_found: "Your profile couldn't be found, please reconnect yourself",
      user_not_found: "User %{username} doesn't exist",
    },
    permission: {
      view: 'Allowed to join',
      share: 'Invite own contacts',
    },
    time: {
      hours: '1 hour |||| %{smart_count} hours',
      minutes: '1 minute |||| %{smart_count} minutes',
      days: '1 day |||| %{smart_count} days',
    },
    validation: {
      futureDate: 'Must be in the future'
    },
  },
};
