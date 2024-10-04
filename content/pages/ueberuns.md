---
type: PageLayout
title: Über uns
sections:
  - type: GenericSection
    title:
      type: TitleBlock
      text: Über MC-Reisen24 – Ihr Partner für unvergessliche Reisen
      color: text-dark
      styles:
        self:
          textAlign: center
    subtitle: Leidenschaft für Reisen und erstklassiger Service
    text: >+
      MC-Reisen24 ist Ihr zuverlässiger Partner für unvergessliche Reisen. Mit
      jahrelanger Erfahrung in der Reisebranche bieten wir maßgeschneiderte
      Angebote, die auf Ihre Wünsche abgestimmt sind. Unser engagiertes Team
      steht Ihnen jederzeit zur Seite, um sicherzustellen, dass Ihr Urlaub
      reibungslos verläuft. Wir legen großen Wert auf Qualität und
      Kundenzufriedenheit, damit Sie jeden Moment Ihrer Reise genießen können.

    actions: []
    colors: bg-neutral-fg-dark
    backgroundImage:
      type: BackgroundImage
      url: /images/abstract-background.svg
      altText: Placeholder image
      backgroundSize: cover
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 100
    styles:
      self:
        padding:
          - pt-40
          - pl-4
          - pb-40
          - pr-4
        alignItems: center
        flexDirection: row-reverse
        justifyContent: center
      text:
        textAlign: center
      subtitle:
        textAlign: center
  - type: FeaturedPeopleSection
    title:
      type: TitleBlock
      text: Wer steckt dahinter?
      color: text-dark
      styles:
        self:
          textAlign: center
    people:
      - content/data/person2.json
    actions: []
    variant: three-col-grid
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
        justifyContent: center
      subtitle:
        textAlign: center
  - type: FeaturedPostsSection
    title:
      type: TitleBlock
      text: Featured posts
      color: text-dark
      styles:
        self:
          textAlign: center
    posts:
      - content/pages/blog/surround-yourself-with-right-people.md
      - content/pages/blog/top-twenty-ways-to-save-time.md
    showThumbnail: true
    showExcerpt: true
    showDate: true
    showAuthor: true
    actions: []
    elementId: ''
    variant: three-col-grid
    colors: bg-light-fg-dark
    hoverEffect: shadow
    styles:
      self:
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
        justifyContent: center
slug: ueberuns
seo:
  type: Seo
  metaTitle: Careers - Demo site
  metaDescription: This is the careers page built with Netlify.
  metaTags: []
---
