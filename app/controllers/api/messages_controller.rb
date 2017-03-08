
class Api::MessagesController < ApplicationController


# def index
#   @sent_messages = current_user.sent_messages.order(created_at: :desc)
#   @received_messages = current_user.received_messages.order(created_at: :desc)
# end


def show
  @message = Message.find(params[:id])
end


def create
  @message = current_user.sent_messages.new(message_params)
  if @message.save
    render :show
  else
    render json: @message.errors.full_messages, status: 422
  end

end


private

def message_params
  params.require(:message).permit(:addressee_id, :title, :body)
end

end
