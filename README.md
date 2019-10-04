# Welcome to the Card family!
<img width="50" src="https://github.com/techdivision/card-documentation-assets/raw/master/assets/Logo.png" alt="" />

Available Card Packages  
[Card - the basics](https://github.com/techdivision/card)  
[Card decks - aggregate cards beautifully](https://github.com/techdivision/card-decks)  
[Card shuffle - deck filtering](https://github.com/techdivision/card-shuffle)  
[Bootstrap 4 styling for cards](https://github.com/techdivision/card-bootstrap4)  
[Materialize styling for cards](https://github.com/techdivision/card-materialize)   

# TechDivision.Card.Materialize - cards with style!
> Use this package if you
> - want a ready-styled card, deck and filter layout with [materialize styles](https://materializecss.com/cards.html)  

You can use materialize styles also if you dont use material design.
We included a small stylesheet for you that hopefully doesnt interfere with your styles.

![Applying inline style](https://github.com/techdivision/card-documentation-assets/raw/master/assets/card-materialize/materialize.png)

### Installation

TechDivision.Card.Materialize is available via packagist. Add `"techdivision/card-materialize" : "~1.0"` to the require section of the composer.json
or run `composer require techdivision/card-materialize`.  
**This package also installs [TechDivision.Card](https://github.com/techdivision/card), [TechDivision.Card.Decks](https://github.com/techdivision/card-decks), [TechDivision.Card.Shuffle](https://github.com/techdivision/card-shuffle) and [Sitegeist.Taxonomy](https://github.com/sitegeist/Sitegeist.Taxonomy).**  


### Configuration
TechDivision.Card.Materialize runs out of the box.  
In order to remove the materialize stylesheet and javascript, please do the following:  

```
prototype(Neos.Neos:Page) {
    head.stylesheets.cardStyleSheetMaterialize >
    body.javascripts.materializeScript >
    body.javascripts.materializeInitScript >
}
```

### Contribution
We will be happy to receive pull requests - dont hesitate!
