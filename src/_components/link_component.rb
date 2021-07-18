class LinkComponent < BaseComponent
  def initialize(href: "/", classes: nil, **opts)
    @classes = classes
    @href = href
    @opts = opts
  end

  def call
    tag.a content, class: classes, href: href, **opts
  end

  def call_external
    tag.a content, class: "external-link #{classes}", href: href, target: "_blank", rel: "noopener noreferrer", **opts
  end

  private

  attr_reader :classes, :href, :opts
end
