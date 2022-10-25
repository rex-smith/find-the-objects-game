class Api::V1::CharactersController < ApplicationController
  before_action :get_game, only: %i[ index ]

  def index
    @characters = @game.characters
    render json: @characters
  end

  private

  def get_game
    @game = Game.find(params[:game_id])
  end

end
