---
type: PageLayout
title: Kontakt
sections:
  - type: GenericSection
    title:
      type: TitleBlock
      text: Kontakt
      color: text-dark
    subtitle: Section with a form subtitle
    text: >
      Nutzen Sie unser Kontaktformular, um uns schnell und unkompliziert Ihre
      Anfragen oder Wünsche mitzuteilen. Wir freuen uns darauf, Ihnen zu helfen
      und werden uns zeitnah mit einer Antwort bei Ihnen melden!


      Schreibe deine Reisedaten und die Personenanzahl in das Nachrichtenfenster
      ->
    actions: []
    media:
      type: FormBlock
      fields:
        - type: TextFormControl
          name: name
          label: Name
          hideLabel: true
          placeholder: Dein Name
          isRequired: true
          width: full
        - type: EmailFormControl
          name: email
          label: Email
          hideLabel: true
          placeholder: Deine Mailadresse
          isRequired: true
          width: full
        - type: TextFormControl
          name: telefon
          label: Name
          hideLabel: true
          placeholder: Deine Telefonnummer
          isRequired: true
          width: full
        - type: SelectFormControl
          name: reiseart
          label: reiseart
          hideLabel: true
          defaultValue: Reiseart auswählen
          options:
            - Flug
            - Pauschalreise
            - ''
            - Mietwagen
            - Andere
          isRequired: false
          width: full
        - type: TextareaFormControl
          name: message
          label: Message
          hideLabel: true
          placeholder: Deine Nachricht
          width: full
          isRequired: true
      submitButton:
        type: SubmitButtonFormControl
        label: Senden
        icon: arrowRight
        iconPosition: right
        style: primary
      elementId: contact-form
      styles:
        self:
          padding:
            - pt-6
            - pb-6
            - pl-6
            - pr-6
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 1
          borderRadius: large
    badge:
      type: Badge
      label: Kontaktiere uns
      color: text-primary
    colors: bg-light-fg-dark
  - type: DividerSection
    title: Divider
    elementId: ''
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-3
          - pl-3
          - pb-3
          - pr-3
  - type: FeaturedItemsSection
    title:
      type: TitleBlock
      text: Weitere Kontaktmöglichkeiten
      color: text-dark
      styles:
        self:
          textAlign: center
    subtitle: ''
    items:
      - type: FeaturedItem
        title: WhatsApp
        subtitle: ''
        text: >+
          <a
          href="https\://wa.me/4915112345678?text=Hallo,%20ich%20habe%20eine%20Frage%20zu%20Ihren%20Reiseangeboten"
          target="\_blank" style="text-decoration:none; color:#25D366;
          font-size:18px;">
              <i class="fa fa-whatsapp"></i> WhatsApp Nachricht senden
          </a>

        actions:
          - type: Link
            label: Hier klicken
            altText: whatsapp
            url: >-
              https://wa.me/4915112345678?text=Hallo,%20ich%20habe%20eine%20Frage%20zu%20Ihren%20Reiseangeboten
            showIcon: true
            icon: send
            iconPosition: right
            style: secondary
            elementId: ''
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            textAlign: left
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
        image:
          type: ImageBlock
          url: /images/WhatsApp.svg.png
          altText: Image alt text placeholder
          elementId: ''
          styles:
            self:
              borderRadius: medium
      - type: FeaturedItem
        title: Instagram
        subtitle: ''
        text: >+
          <a href="https\://www\.instagram.com/mc\_reisen24.de/"
          target="\_blank">
              Besuche uns auf Instagram
          </a>



        actions: []
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            textAlign: left
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
      - type: FeaturedItem
        title: Mail
        subtitle: Engineering
        text: >-
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          explicabo.
        actions: []
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
    actions: []
    variant: toggle-list
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pb-40
          - pt-16
          - pl-3
          - pr-3
        justifyContent: center
      subtitle:
        textAlign: center
  - type: DividerSection
    title: Divider
    elementId: ''
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-3
          - pl-3
          - pb-3
          - pr-3
slug: kontakt
seo:
  type: Seo
  metaTitle: Careers - Demo site
  metaDescription: This is the careers page built with Netlify.
  metaTags: []
---
