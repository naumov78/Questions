
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
    addressee = User.find(message_params[:addressee_id])
    updated_unread_messages = addressee.unread_messages + 1
    addressee.update_attribute(:unread_messages, updated_unread_messages)
    render :show
  else
    render json: @message.errors.full_messages, status: 422
  end
end


def update
  message = Message.find(params[:id])
  message.update_attribute(:unread, false)
  updated_unread_messages = current_user.unread_messages - 1
  current_user.update_attribute(:unread_messages, updated_unread_messages)
  @user = current_user
  render 'api/users/show'
end

private

def message_params
  params.require(:message).permit(:addressee_id, :title, :body)
end

end
