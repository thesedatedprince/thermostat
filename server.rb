require 'sinatra'
require 'json'

class Thermostat <

get '/' do
"Hello"
end

get '/temperature' do
  headers 'Access-Control-Allow-Origin' => '*'
end

post '/temperature' do
  headers 'Access-Control-Allow-Origin' => '*'
  # content_type :json
  $current_temperature = params[:temperature]
  p $current_temperature
  $city = params[:city]
end

end
