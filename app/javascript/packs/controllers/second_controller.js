import { Controller } from "stimulus"

export default class extends Controller {
  connect() {
    console.log("Log the second element", this.element)
  }
}
