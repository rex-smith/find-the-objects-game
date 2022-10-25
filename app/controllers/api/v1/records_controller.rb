class Api::V1::RecordsController < ApplicationController
  before_action :set_record, only: %i[ show update ]
  before_action :get_game, only: %i[ index create ]

  def index
    @records = @game.records
    render json: @records
  end

  def top
    @records = Game.all.map do |game|
      game.records.order(:time).limit(10)
    end
    render json: @records
  end

  def show
    @record = Record.find(params[:id])
    render json: @record
  end

  def create
    @record = @game.records.build(record_params)
    if @record.save
      render json: @record, status: :created
    else
      render json: @record.errors, status: :unprocessable_entity
    end
  end

  def update
    if @record.update(record_params)
      render json: @record
    else
      render json: @record.errors, status: :unprocessable_entity
    end
  end

  private
    def set_record
      @record = Record.find(params[:id])
    end

    def get_game
      @game = Game.find(params[:game_id])
    end

    def record_params
      params.require(:record).permit(:game_id, :username, :time)
    end

end
