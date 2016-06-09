class StatementsController < ApplicationController
respond_to :json

  def index
    respond_to do |format|
      format.html { render :formats => [:html] }
      format.json { render json: Statement.all }
    end
  end

  def new
    @statement = Statement.new
    render :formats => [:html]
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
    params.require(:statement).permit(:title, :all_tags)
  end

end
