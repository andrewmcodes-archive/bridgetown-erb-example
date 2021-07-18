import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
import Turbo from "@hotwired/turbo"

import "index.css"


// Import all javascript files from src/_components
const componentsContext = require.context("bridgetownComponents", true, /.js$/)
componentsContext.keys().forEach(componentsContext)

console.info("Bridgetown is loaded!")
const application = Application.start()
const context = require.context("./controllers", true, /.js$/)
application.load(definitionsFromContext(context))