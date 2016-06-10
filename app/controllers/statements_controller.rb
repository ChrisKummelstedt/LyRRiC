class StatementsController < ApplicationController
respond_to :json

  def index
    render json: Statement.all
  end

  def new
    @statement = Statement.new
  end

  def show
    render json: Statement.find(params[:id])
  end

  def create
    statement = Statement.new(statement_params)
    if statement.save
      current_user.statements << statement
      redirect_to root_path
    else
      render :new
    end
  end

  private

  def statement_params
    params.require(:statement).permit(:title, :all_tags, :id)
  end

end
