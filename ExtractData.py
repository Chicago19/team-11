#inPksGmfJGWW8uC7o4JbQJ79T
from simple_salesforce import Salesforce
sf = Salesforce(username='username', password='password', security_token='token')
sf.Contact.create({'LastName':'Smith','Email':'example@example.com'})
# this ended up as a dead end because the free version of salesforce, which we were using doesn't exteral apis
