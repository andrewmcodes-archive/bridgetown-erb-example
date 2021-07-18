class ProseComponent < BaseComponent
  def initialize(classes: nil)
    @classes = classes
  end

  def call
    tag.div content, class: "prose lg:prose-lg #{classes}"
  end

  private

  attr_reader :classes
end
