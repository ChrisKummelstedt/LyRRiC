class VotesController < ApplicationController

  before_action :authenticate_user!
  # respond_to :json

  def index
    @votes = Vote.find(params[:statement_id])
  end

  def new
    @statement = Statement.find(params[:statement_id])
    @vote = Vote.new
  end

  def create
    @statement = Statement.find(params[:statement_id])
    @vote.user = current_user
    @vote.statement = @statement
    render :new
  end

  def vote_params
    params.require(:vote).permit(:verdict)
  end

end
