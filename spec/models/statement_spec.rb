require 'rails_helper'

describe Statement, type: :model do

  it { is_expected.to have_many :votes }

end
