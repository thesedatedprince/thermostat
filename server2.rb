require 'sinatra/base'
require 'json'

class ThermoApp < Sinatra::Base
  get '/' do
  "Hello"
  end

  get '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*'
    content_type :json
    $current_temperature ||= 20
    $city ||= "London"
    {temperature: $current_temperature, city: $city}.to_json
  end

  post '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*'
    $current_temperature = params[:temperature]
    $city = params[:city]
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
