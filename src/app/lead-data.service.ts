import { Injectable } from '@angular/core';

@Injectable()
export class LeadDataService {

  public _leads: any[] = [];

  constructor() {
    for (var i = 0; i < 10; ++i){
      this._leads.push({
        'name':this.makeName(),
        'address': this.makeAddress(),
        'phone': this.makePhone(),
        'email': this.makeEmail()
        })
    }
  }

  public getLeads(){
    return this._leads
  }

  public getEvents(){
    var events = [];
    for( var i=0; i < Math.floor(Math.random() * 3) + 2; i++ ) {
      events.push(this.makeEvent())
    }
    return events
  }

  public makeName() {
    var first_name = "";
    var last_name = "";

    var possible_upper = "ABCDEFGHIJKLMNOPRSTUV";
    var possible_lower = "bcdfghijklmnprstvw";
    var possible_vowels = 'aeiou';

    first_name = possible_upper.charAt(Math.floor(Math.random() * possible_upper.length));
    last_name = possible_upper.charAt(Math.floor(Math.random() * possible_upper.length));

    for( var i=0; i < Math.floor(Math.random() * 2) + 2; i++ ) {
      first_name += possible_vowels.charAt(Math.floor(Math.random() * possible_vowels.length));
      first_name += possible_lower.charAt(Math.floor(Math.random() * possible_lower.length));
    }

    for( var i=0; i < Math.floor(Math.random() * 2) + 3; i++ ) {
      last_name += possible_vowels.charAt(Math.floor(Math.random() * possible_vowels.length));
      last_name += possible_lower.charAt(Math.floor(Math.random() * possible_lower.length));
    }

    return first_name + ' ' + last_name;
  }

  public makeAddress() {
    var street_name = "";

    var possible_upper = "ABCDEFGHIJKLMNOPRSTUV";
    var possible_lower = "bcdfghijklmnprstvw";
    var possible_vowels = 'aeiou';
    var routes = ['Ave', 'St', 'Blvd', 'Rd'];
    var cities = ['Buffalo', 'Kenmore', 'Cheektowaga', 'Amherst', 'Williamsville'];

    street_name = possible_upper.charAt(Math.floor(Math.random() * possible_upper.length));

    for( var i=0; i < Math.floor(Math.random() * 2) + 3; i++ ) {
      street_name += possible_vowels.charAt(Math.floor(Math.random() * possible_vowels.length));
      street_name += possible_lower.charAt(Math.floor(Math.random() * possible_lower.length));
    }

    return Math.floor(Math.random() * 999) + ' ' + street_name + ' ' + routes[Math.floor(Math.random() * routes.length)] + ', ' + cities[Math.floor(Math.random() * cities.length)] + ' NY';
  }

  public makePhone() {
    var phone = '(716) ';
    phone += (Math.floor(Math.random() * 899) + 100) + '-' + (Math.floor(Math.random() * 8999) + 1000)
    return phone
  }

  public makeEmail() {
    var email = '';
    var possible = "bcdfghijklmnprstvwaeiou";
    for( var i=0; i < Math.floor(Math.random() * 2) + 3; i++ ) {
      email += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    email += '@';

    for( var i=0; i < Math.floor(Math.random() * 2) + 3; i++ ) {
      email += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    email += '.com';

    return email

  }

  public makeEvent() {
    var event = {};

    var dates = [
      "June 10, 2017 22:13:00",
      "June 11, 2017 00:20:00",
      "June 09, 2017 13:49:00",
      "June 10, 2017 17:39:00",
    ];
    var picked_date = dates[Math.floor(Math.random() * dates.length)];
    var date = new Date(picked_date);

    var types = ['claimed','called','mailed','emailed','other'];
    var type = types[Math.floor(Math.random() * types.length)]

    var details = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

    var users = ['Nate', 'Sebe', 'Kenny', 'Ray']
    var user = users[Math.floor(Math.random() * users.length)]

    return {
      'datetime':date,
      'type': type,
      'details': details,
      'user': user
    }
  }

}
