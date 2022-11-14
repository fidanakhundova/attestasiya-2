class Message {
    constructor (author, text){
    this.author = author;
    this.time = new Date();
    this.text= text
  }
  toString(){
      return `${this.time.getHours()}:${this.time.getMinutes()} ${this.author}: ${this.text}` 
    }
  }
  class Messenger {
    constructor () {
    this.messages = []
    }
    show_history(){
        this.messages.forEach(item=>console.log(item))
      }
      send(author, text){
      const message= new Message(author,text)
      this.messages.push(message.toString())
      }
   }

let messenger = new Messenger()
messenger.send('Adil', 'ilk mesaj')
messenger.send('Məryəm', 'İkinci mesaj')
messenger.show_history()



