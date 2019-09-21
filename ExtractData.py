#
from simple_salesforce import Salesforce
sf = Salesforce(username='', password='', security_token='')
sf.Contact.create({'LastName':'Smith','Email':'example@example.com'})
# this ended up as a dead end because the free version of salesforce, which we were using doesn't exteral apis
