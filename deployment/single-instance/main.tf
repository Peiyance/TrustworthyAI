# Provides a resource to manage EC2 Fleets.
#
# Usage:
# Configure the credentials first with `aws configure`
# Create a file named `terraform.tfvars` and set the values of the variables defined in `variables.tf`
#
# terraform init      Initialize a Terraform working directory
# terraform validate  Validates the Terraform files
# terraform fmt       Rewrites config files to canonical format
# terraform plan      Generate and show an execution plan
# terraform apply     Builds or changes infrastructure
# terraform destroy   Destroy Terraform-managed infrastructure

provider "aws" {
  region = var.region
}

locals {
  common_tags = {
    Name    = "guardai"
    project = var.project_tag
  }
}

resource "aws_security_group" "guardai_ami_sg" {
  ingress {
    from_port = 22
    to_port   = 22
    protocol  = "tcp"

    cidr_blocks = [
      "0.0.0.0/0",
    ]
  }

  ingress {
    from_port = 80
    to_port   = 80
    protocol  = "tcp"

    cidr_blocks = [
      "0.0.0.0/0",
    ]
  }

  ingress {
    from_port = 443
    to_port   = 443
    protocol  = "tcp"

    cidr_blocks = [
      "0.0.0.0/0",
    ]
  }


  # outbound internet access
  # allowed: any egress traffic to anywhere
  egress {
    from_port = 0
    to_port   = 0
    protocol  = "-1"

    cidr_blocks = [
      "0.0.0.0/0",
    ]
  }

  tags = local.common_tags
}

# Provides an EC2 launch template resource.
# Can be used to create EC2 instances or auto scaling groups.
resource "aws_launch_template" "guardai_ami_lt" {
  name_prefix = "guard_ai_launch_template"
  image_id    = var.ami_id
  key_name    = var.key_name

  vpc_security_group_ids = [
    aws_security_group.guardai_ami_sg.id,
  ]

  instance_type = var.instance_type

  tag_specifications {
    # Tags of EC2 instances
    resource_type = "instance"
    tags = local.common_tags
  }

  tag_specifications {
    # Tags of EBS volumes
    resource_type = "volume"
    tags = local.common_tags
  }
}


# Assign elastic IP to the instance
resource "aws_eip_association" "eip_assoc" {
  instance_id   = aws_instance.main_instance.id
  allocation_id  = var.eip_id
}


# Launch an EC2 instance
resource "aws_instance" "main_instance" {
  launch_template {
    id      = aws_launch_template.guardai_ami_lt.id
    version = "$Latest"
  }

  # The tags of the Fleet resource itself.
  # To tag instances at launch, specify the tags in the Launch Template.
  tags = local.common_tags
  availability_zone = var.zone
}