// Model https://github.com/marmelab/react-admin/blob/master/packages/ra-language-french/src/index.ts

module.exports = {
  app: {
    action: {
      contact_organizer: "Contacter l'organisateur",
      copy: 'Copier dans votre presse-papier',
      continue: 'Continuer',
      create_ad: 'Poster une annonce',
      send: 'Envoyer',
      send_invitation: "Envoyer l'invitation |||| Envoyer %{smart_count} invitations",
      share: 'Partager',
    },
    page: {
      post: 'Poster une annonce',
      addresses: 'Mes adresses',
      network: 'Mon réseau',
      profile: 'Mon profil',
    },
    modal: {
      share_ad: "Partager l'annonce"
    },
    block: {
      contact_poster: "Contacter l'annonceur",
      contact_poster_short: 'Contacter',
      conditions: 'Conditions',
      welcome: 'Bienvenue sur %{app_name} !',
      welcome_text: "%{app_name} est une application de petites annonces qui ne sont visibles que des personnes qui font partie de votre réseau de confiance. Contrairement à la plupart des sites de ce genre très orientés “commerce”, l’intention principale de ce site est l’entraide. Cela n’empêche pas de vendre ou d’acheter en euros, car pour le moment nous avons tous besoins d’euros pour vivre. Bonne découverte !"
    },
    input: {
      about_you: 'Quelques mots sur vous',
      conditions: 'Conditions',
      date: 'Date',
      duration: 'Durée',
      message: 'Message',
      user_id: 'Identifiant utilisateur',
      resource_type: 'Type de ressource',
      exchange_type: "Type d'échange",
    },
    choice: {
      offer: "Je propose",
      request: "Je cherche",
      atom_based_resource: 'Matérielle',
      human_based_resource: 'Humaine (services, compétences...)',
      other_resource: 'Autre',
      gift: 'Don',
      barter: 'Troc',
      sale: 'Vente',
      purchase: 'Achat',
      loan: 'Prêt',
      borrowing: 'Emprunt',
    },
    conditions: {
      gift: 'Conditions de don',
      barter: 'Conditions de troc',
      sale: 'Conditions de vente',
      purchase: "Conditions d'achat",
      loan: 'Conditions de prêt',
      borrowing: "Conditions d'emprunt",
      other: 'Autres conditions'
    },
    types: {
      sale_offer: 'Offre de vente',
      barter_offer: 'Offre de troc',
      loan_offer: 'Offre de prêt',
      gift_offer: 'Offre de don',
      rent_offer: 'Offre de location',
      purchase_request: "Demande d'achat",
      barter_request: 'Demande de troc',
      loan_request: 'Demande de prêt',
      gift_request: 'Demande de don',
      rent_request: 'Demande de location',
      atom_based_resource: 'Matériel',
      human_based_resource: 'Humain',
      other_resource: 'Autre',
    },
    helper: {
      message_profile_show_right:
        'Envoyer un message à %{username} lui donnera le droit de voir votre profil, pour lui permettre de vous répondre.',
      no_contact: 'Vous devez ajouter des contacts à votre réseau pour pouvoir les inviter',
    },
    message: {
      copied_to_clipboard: 'Copié !'
    },
    notification: {
      invitation_sent: '1 invitation envoyée |||| %{smart_count} invitations envoyées',
      profile_data_not_found: "Votre profil n'a pas été trouvé, veuillez vous déconnecter et vous reconnecter",
      user_not_found: "L'utilisateur %{username} n'existe pas",
    },
    permission: {
      view: "Droit de s'inscrire",
      share: 'Inviter ses contacts',
    },
    time: {
      hours: '1 heure |||| %{smart_count} heures',
      minutes: '1 minute |||| %{smart_count} minutes',
      days: '1 jour |||| %{smart_count} jours',
    },
    validation: {
      futureDate: 'Doit être dans le futur',
    },
  },
};
